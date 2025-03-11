<template>
	<NoPermission v-if="!$user.data" />
	<div v-else-if="profile.data">
		<div class="flex mx-auto -mt-10 md:-mt-4 max-w-4xl translate-x-0 px-5" style="margin-top: 30px;">
			<div class="items-center">
				<div>
					<img v-if="profile.data.user_image" :src="profile.data.user_image"
						class="object-cover h-[200px] w-[200px] rounded-full border-4 border-white object-cover" />
					<UserAvatar v-else :user="profile.data"
						class="object-cover h-[100px] w-[100px] rounded-full border-4 border-white object-cover" />
				</div>
				<div class="text-center">
					<h2 class="mt-1 text-3xl font-semibold text-ink-gray-9">
						{{ profile.data.full_name }}
					</h2>
					<div class="mt-1 text-base text-ink-gray-7">
						{{ profile.data.headline }}
					</div>
				</div>
			</div>
			<div>
				<h1 style="font-size: 30px;">My Profile</h1>
				<div class="separator"></div>

				<div class="flex bg-surface-gray-2 " style="padding: 40px 40px 20px;">
					<div class="px-3">
						<FormControl :type="'text'" :ref_for="true" size="lg" variant="outline"
							placeholder="Enter your name" :disabled="false" label="Name" v-model="profileData.first_name" />
					</div>
					<div class="px-3">
						<FormControl :type="'text'" :ref_for="true" size="lg" variant="outline"
							placeholder="Enter your last name" :disabled="false" label="LastName"
							v-model="profileData.last_name" />
					</div>
				</div>
				<div>
					<h1 style="font-size: 30px;letter-spacing: -0.7px;margin: 20px 0px;">Change Password</h1>
					<div class="flex bg-surface-gray-2 rounded-md " style="padding: 40px 40px 20px;">
						<div class="p-2">
							<FormControl :type="'password'" :ref_for="true" size="lg" variant="outline"
								placeholder="Enter your new password" :disabled="false" label="New Password"
								v-model="passwordData.new_password" />
						</div>
						<div class="p-2">
							<FormControl :type="'password'" :ref_for="true" size="lg" variant="outline"
								placeholder="Enter your new password again" :disabled="false"
								label="Re-type New Password" v-model="passwordData.confirm_password" />
						</div>
					</div>
				</div>
				<div class="btns">
                    <button @click="saveProfile" class="save-btn">Save Changes</button>
                    <button @click="logout" class="logout-btn">Logout</button>
                </div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Breadcrumbs, createResource, Button, TabButtons, FormControl } from 'frappe-ui'
import { computed, inject, watch, ref, onMounted, watchEffect, reactive } from 'vue'
import { sessionStore } from '@/stores/session'
import UserAvatar from '@/components/UserAvatar.vue'
import { useRoute, useRouter } from 'vue-router'
import NoPermission from '@/components/NoPermission.vue'
import { convertToTitleCase, updateDocumentTitle, getFileSize, showToast, escapeHTML } from '@/utils'
import EditProfile from '@/components/Modals/EditProfile.vue'

const { user } = sessionStore()
const $user = inject('$user')
const route = useRoute()
const router = useRouter()
const activeTab = ref('')
const showProfileModal = ref(false)

const props = defineProps({
	username: {
		type: String,
		required: true,
	},
})

// Initialize profile data reactive object
const profileData = reactive({
	first_name: '',
	last_name: '',
	headline: '',
	bio: '',
	image: null,
})

const passwordData = reactive({
	new_password: '',
	confirm_password: ''
})

onMounted(() => {
	if ($user.data) profile.reload()
})

const profile = createResource({
	url: 'frappe.client.get',
	makeParams(values) {
		return {
			doctype: 'User',
			filters: {
				username: props.username,
			},
		}
	},
	onSuccess(data) {
		profileData.first_name = data.first_name || '';
		profileData.last_name = data.last_name || '';
		profileData.headline = data.headline || '';
		profileData.bio = data.bio || '';
	}
})

watch(
	() => props.username,
	() => {
		profile.reload()
	}
)

const isSessionUser = () => {
	return $user.data?.email === profile.data?.email
}

const updateProfile = createResource({
	url: 'frappe.client.set_value',
	makeParams() {
		return {
			doctype: 'User',
			name: profile.data?.name,
			fieldname: {
				first_name: profileData.first_name,
				last_name: profileData.last_name,
				headline: profileData.headline,
				bio: escapeHTML(profileData.bio),
				...(profileData.image && { user_image: profileData.image.file_url })
			},
		}
	},
	onSuccess(data) {
		showToast('Success', 'Profile updated successfully', 'check')
		profile.reload()
	},
})

const updatePassword = createResource({
	url: 'frappe.core.api.user.update_password',
	makeParams() {
		return {
			new_password: passwordData.new_password
		}
	},
	onSuccess() {
		showToast('Success', 'Password updated successfully', 'check')
		passwordData.new_password = '';
		passwordData.confirm_password = '';
	},
})

const saveProfile = () => {
	if (passwordData.new_password || passwordData.confirm_password) {
		if (passwordData.new_password !== passwordData.confirm_password) {
			showToast('Error', 'Passwords do not match', 'x')
			return
		}
		
		if (passwordData.new_password.length < 6) {
			showToast('Error', 'Password must be at least 6 characters', 'x')
			return
		}
	}

	updateProfile.submit({}, {
		onSuccess() {

			if (passwordData.new_password && passwordData.new_password === passwordData.confirm_password) {
				updatePassword.submit({}, {
					onError(err) {
						showToast('Error', err.messages?.[0] || 'Failed to update password', 'x')
					}
				})
			}
		},
		onError(err) {
			showToast('Error', err.messages?.[0] || 'Failed to update profile', 'x')
		},
	})
}
const handleLogout = async () => {
	try {
		await logout.submit();
		userResource.data = null;
		isLoggedIn.value = false;
		router.push('/login');
	} catch (error) {
		console.error('Logout failed:', error);
	}
};
const logout = async() => {
	try {
		await logout.submit();
		userResource.data = null;
		isLoggedIn.value = false;
		sessionStore().logout()
		router.push('/login');
	} catch (error) {
		console.error('Logout failed:', error);
	}

}

const pageMeta = computed(() => {
	return {
		title: profile.data?.full_name,
		description: profile.data?.headline,
	}
})

updateDocumentTitle(pageMeta)
</script>
<style scoped>
.separator {
	width: 100%;
	height: 3px;
	background: linear-gradient(to right, #ff8c00 5%, #cccccc 9%);
	display: block;
	visibility: visible;
	margin:20px 0px;
}
.btn{
	font-family: Montserrat;
  line-height: 14px;
  font-size: 14px;	
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}


.btns {
	margin-top:20px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  gap: 1rem; 
}


.save-btn {
	background-color: rgba(227,77,0,1);
  border-radius: 50px;
  padding: 15px 25px;
  color: white;
  border: none; 
  font-family: Montserrat;
  line-height: 14px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer; 
  transition: background-color 0.3s ease; 
}

.save-btn:hover {
  background-color: #e67e22; 
}

.logout-btn {
  background-color: transparent; 
  color: #ff8c00;
  border: 1px solid #4b4845; 
  border-radius: 50px;
  padding: 15px 25px;
  text-transform: uppercase;
  font-size: 14px; 
  cursor: pointer; 
  transition: background-color 0.3s ease, color 0.3s ease;
}

.logout-btn:hover {
  background-color: #ff8c00; 
  color: white; 
}
</style>