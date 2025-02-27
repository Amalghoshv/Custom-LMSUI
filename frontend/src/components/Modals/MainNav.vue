<template>
	<nav class="main-nav">
		<div class="nav-left">
			<a href="https://learn.millioncoders.org/">
				<img class="img-responsive logo_transparent_static visible"
					src="https://learn.millioncoders.org/wp-content/uploads/2025/02/Million-Coders-Logo_BLK-1.png"
					style="width: 100px" alt="Million Coders" />
			</a>

			<div class="dropdown-container">
				<div class="dropdown-trigger" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
					<Menu />
				</div>
				<div class="dropdown-menu" v-show="showDropdown" @mouseover="showDropdown = true"
					@mouseleave="showDropdown = false">
					<div class="dropdown-items">
						<div class="dropdown-item" v-for="(category, index) in categories.data" :key="index">
							<a href="#" @click.prevent="selectCategory(category.value)"
								:class="{ 'selected': route.query.category === category.value }">
								{{ category.label }}
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Search Bar -->
			<div class="autocomplete-wrapper" model="search">
				<div class="search-container">
					<input type="text" id="search-courses-input" placeholder="Search courses" name="search"
						v-model="searchQuery" autocomplete="off" class="autocomplete-input" />
					<button class="search-button" @click="handleSearchClick">
						<Search class="search-icon" />
					</button>
				</div>
				<div class="autocomplete autocomplete-list" style="display: none">
					<ul></ul>
				</div>
			</div>

			<!-- Navigation Links -->
			<div class="nav-links">
				<div class="nav-link-item">
					<Megaphone /><a href="/instructor" class="nav-link">
						Become an Instructor</a>
				</div>
				<div class="nav-link-item">
					<BriefcaseBusiness />
					<a href="/enterprise" class="nav-link">For Enterprise</a>
				</div>
			</div>
		</div>

		<div class="nav-right">
			<div class="user-menu">
				<div v-if="isLoggedIn" ref="dropdownWrapper">
					<div class="user-greeting">
						<button class="user-menu-button" @click="toggleDropdown">
							<User class="user-icon" /> Hi, {{ userResource.data?.full_name }}
							<ChevronDown class="dropdown-icon" />
						</button>
					</div>

					<div class="profile-dropdown-content profile-dropdown" id="learningAreaDropdown"
						v-show="isDropdownOpen">
						<div class="dropdown-heading">LEARNING AREA</div>
						<ul class="profile-dropdown-items">
							<li>
								<a href="#" @click.prevent="handleItemClick(handleEnrolledCoursesClick)">
									Enrolled Courses
								</a>
							</li>
							<li>
								<a href="#" @click.prevent="handleItemClick(handleMessagesClick)">
									Messages
								</a>
							</li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">Wishlist</a></li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">My Orders</a></li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">My Certificates</a></li>
							<li>
								<a href="#" @click.prevent="handleItemClick(handleSettingsClick)">
									Settings
								</a>
							</li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">Memberships</a></li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">Enrolled Quizzes</a></li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">My Assignments</a></li>
							<li><a href="#" @click.prevent="handleItemClick(() => { })">My Points</a></li>
							<li class="logout">
								<a href="#" @click.prevent="handleItemClick(handleLogout)">Logout</a>
							</li>
						</ul>
					</div>
				</div>
				<div v-else>
					<button class="login-button" @click="redirectToLogin">
						Login
					</button>
				</div>
			</div>
			<div class="nav-icon-wrapper">
				<Heart class="nav-icon" />
			</div>

			<div class="nav-icon-wrapper">
				<Settings @click.prevent="handleSettingsClick" class="nav-icon" />
			</div>
		</div>
		<SettingsModal v-if="userResource.data?.is_moderator" v-model="showSettingsModal" />
	</nav>

</template>

<script setup>
import { ref, watch, h, defineEmits, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { sessionStore } from '@/stores/session';
import { usersStore } from '@/stores/user';
import { useSettings } from '@/stores/settings';
import { createResource } from 'frappe-ui';
const route = useRoute();
const router = useRouter();
let unreadCount = ref(0);
const { logout, isLoggedIn } = sessionStore();
const settingsStore = useSettings();
let { userResource } = usersStore()
import SettingsModal from '@/components/Modals/Settings.vue'
const showSettingsModal = ref(false)
import {
	Menu,
	Megaphone,
	BriefcaseBusiness,
	Heart,
	Settings,
	ChevronDown,
	User,
	Search
} from 'lucide-vue-next'

const categories = createResource({
	url: 'lms.lms.api.get_categories',
	makeParams() {
		return {
			doctype: 'LMS Course',
			filters: {
				published: 1,
			},
		};
	},
	cache: ['courseCategories'],
	auto: true,
	transform(data) {
		data.unshift({
			label: 'All Categories',
			value: null,
		});
		return data;
	},
});

const selectCategory = (categoryValue) => {
	const query = { ...route.query }; // 
	if (categoryValue) {
		query.category = categoryValue;
		emit('select-category', category);
	} else {
		delete query.category;
	}
	router.push({ query });
};

const redirectToLogin = () => {
	const redirectPath = router.currentRoute.value.fullPath;
	router.push({ path: '/login', query: { redirect: redirectPath } });

};

watch(
	() => route.query.category,
	(newCategory) => {
		console.log('Selected Category:', newCategory);
	});

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
const handleSettingsClick = () => {
	if (userResource.data?.username) {
		router.push(`/user/${userResource.data.username}`);
	} else {
		console.error('Username not available');
	}
};
const handleEnrolledCoursesClick = () => {
	router.push('/courses');
};


const searchQuery = ref('');
const emit = defineEmits(['search', 'select-category']);

const handleSearchClick = () => {
	if (searchQuery.value.trim()) {
		emit('search', searchQuery.value.trim());
	} else {
		console.log('Search query is empty');
	}
};
watch(
	() => settingsStore.isSettingsOpen,
	(value) => {
		showSettingsModal.value = value
	}
)

const showDropdown = ref(false)

const user = ref('Demo User')
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
	isDropdownOpen.value = !isDropdownOpen.value
}
const unreadNotifications = createResource({
	cache: 'Unread Notifications Count',
	url: 'frappe.client.get_count',
	makeParams(values) {
		return {
			doctype: 'Notification Log',
			filters: {
				for_user: userResource.data?.name,
				read: 0,
			},
		};
	},
	onSuccess(data) {
		unreadCount.value = data;
	},
	auto: userResource.data?.name ? true : false,
});

const handleMessagesClick = () => {
	unreadNotifications.fetch();
	router.push('/notifications');
};

const handleItemClick = (callback) => {
	isDropdownOpen.value = false;
	callback();
};

const closeDropdownOnClickOutside = (event) => {
	const dropdownWrapper = document.querySelector('.user-menu');
	if (dropdownWrapper && !dropdownWrapper.contains(event.target)) {
		isDropdownOpen.value = false;
	}
};

onMounted(() => {
	document.addEventListener('click', closeDropdownOnClickOutside);
});

onUnmounted(() => {
	document.removeEventListener('click', closeDropdownOnClickOutside);
});
</script>

<style scoped>
.main-nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 30px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	top: 0;
	z-index: 1000;
}

.nav-left {
	display: flex;
	align-items: center;
	gap: 20px;
}

.logo {
	font-size: 2rem;
	font-weight: bold;
	color: #000000;
	text-decoration: none;
}

.nav-links {
	display: flex;
	gap: 15px;
}

.nav-link {
	color: #555555;
	font-size: 14px;
	text-decoration: none;
	transition: color 0.3s ease;
	display: flex;
}

.nav-link-item {
	display: flex;
	align-items: center;
	width: 180px;
}

.nav-link:hover {
	color: #e34d00;
}

.user-greeting {
	font-size: 1rem;
	color: #000000;
}

input[type='text'],
textarea {
	display: block;
	padding: 6px 12px;
	padding-right: 12px;
	height: 45px;
	line-height: 1.42857143;
	border-radius: 0;
	border: 2px solid #f0f2f5;
	background: #f0f2f5;
	box-shadow: none;
	color: #555;
}

.dropdown-container {
	position: relative;
	display: inline-block;
}

.dropdown-trigger {
	cursor: pointer;
	padding: 10px;
}

.dropdown-menu {
	display: none;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: white;
	border: 1px solid #ddd;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	min-width: 200px;
	padding: 10px 0;
}

.selected {
	font-weight: bold;
	color: #e34d00;

}

.dropdown-items {
	list-style: none;
	margin: 0;
	padding: 0;
}

.dropdown-item {
	padding: 8px 16px;
}

.dropdown-link {
	text-decoration: none;
	color: #333;
	font-size: 14px;
	display: block;
}

.dropdown-link:hover {
	color: #e34d00;
}

.dropdown-container:hover .dropdown-menu {
	display: block;
}


.autocomplete-wrapper {
	position: relative;
	width: 100%;
	max-width: 400px;
}

.search-container {
	display: flex;
	align-items: center;
	border: 2px solid #f0f2f5;
	border-radius: 4px;
	background-color: #ffffff;
	overflow: hidden;
}

.autocomplete-input {
	flex: 1;
	padding: 10px;
	border: none;
	outline: none;
	font-size: 1rem;
	background-color: transparent;
}

.search-button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color: rgb(12, 5, 31);
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.search-button:hover {
	background-color: #333333;
}

.search-icon {
	width: 33px;
	height: 27px;
	color: #ffffff;

}

.nav-right {
	display: flex;
	align-items: center;
	gap: 20px;
}

.user-menu {
	position: relative;
}

.user-menu-button {
	background-color: rgb(12, 5, 31) !important;
	border-color: rgb(12, 5, 31) !important;
	color: #fff;
	display: flex;
	padding: 10px 30px;
	border-radius: 20px;
	align-items: center;
	gap: 8px;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.3s ease;
}

.user-menu-button:hover {
	background-color: #f0f2f5;
}

.user-icon {
	width: 20px;
	height: 20px;
	color: #fff;

}

.dropdown-icon {
	width: 16px;
	height: 16px;
	color: #fff;
}

.dropdown-content {
	position: absolute;
	right: 0;
	top: 100%;
	margin-top: 10px;
	background-color: #ffffff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	min-width: 200px;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	padding: 10px 0;
}

.dropdown-content a {
	padding: 10px 20px;
	color: #000000;
	text-decoration: none;
	transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
	background-color: #f0f2f5;
}

.nav-icon-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.nav-icon-wrapper:hover {
	background-color: #f0f2f5;
	border-radius: 4px;
}

.nav-icon {
	width: 20px;
	height: 20px;
	color: #000000;

}

.profile-dropdown-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2px;
	padding: 12px;
	background-color: white;
	border: 1px solid #ddd;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	width: 387px;
	position: absolute;
	top: 108%;
	left: -97px;
	z-index: 1000;

}

.profile-dropdown-content ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: contents;

}


.profile-dropdown-content li {
	padding: 8px 12px;
}

.profile-dropdown-content a {
	text-decoration: none;
	color: #333;
	font-size: 14px;
	display: block;
	padding: 10px 15px;
}

.profile-dropdown-content a:hover {
	background-color: #e6b095;
	border-radius: 4px;
	color: #e34d00;
}

.logout {
	grid-column: span 2;
	text-align: right;
	padding: 0;
	border-top: 1px solid #ddd;
}

.logout a {
	padding: 8px 12px;

}

.dropdown-heading {
	grid-column: span 2;
	font-weight: normal;
	color: #333;
	text-align: left;
}

.login-button {
	background-color: rgb(12, 5, 31) !important;
	border-color: rgb(12, 5, 31) !important;
	color: #fff;
	border: none;
	font-size: 1rem;
	padding: 10px 30px;
	border-radius: 20px;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.login-button:hover {
	background-color: #f0f2f5;
}

.notification-badge {
	display: inline-block;
	background-color: #ffcc80;
	color: #333;
	font-size: 12px;
	font-weight: bold;
	padding: 2px 6px;
	border-radius: 50%;
	margin-left: 8px;
	min-width: 20px;
	text-align: center;
}
</style>
