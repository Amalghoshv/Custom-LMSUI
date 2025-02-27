<template>
	<div class="border-2 rounded-md min-w-[23rem] course-start-div">
		<!-- <iframe
			v-if="course.data.video_link"
			:src="video_link"
			class="rounded-t-md min-h-56 w-full"
		/> -->
		<div
      class="course-image rounded-sm"
      :class="{ 'default-image': !course.data.image }"
      :style="{ backgroundImage: 'url(\'' + encodeURI(course.data.image) + '\')' }"
    >
      <div v-if="!course.data.image" class="image-placeholder">
        {{ course.data.title?.[0] || 'C' }}
      </div>
    </div>
		<div class="p-5">
			<div v-if="course.data.price" class="text-2xl font-semibold mb-3">
				{{ course.data.price }}
			</div>
			<router-link v-if="course.data.membership" :to="{
				name: 'Lesson',
				params: {
					courseName: course.name,
					chapterNumber: course.data.current_lesson
						? course.data.current_lesson.split('-')[0]
						: 1,
					lessonNumber: course.data.current_lesson
						? course.data.current_lesson.split('-')[1]
						: 1,
				},
			}">
				<Button variant="solid" size="lg" class="w-full orange-btn">
					<span>
						{{ __('Continue Learning') }}
					</span>
				</Button>
			</router-link>
			<router-link v-else-if="course.data.paid_course" :to="{
				name: 'Billing',
				params: {
					type: 'course',
					name: course.data.name,
				},
			}">
				<Button variant="solid" size="md" class="w-full">
					<span>
						{{ __('Buy this course') }}
					</span>
				</Button>
			</router-link>
			<div v-else-if="course.data.disable_self_learning"
				class="bg-surface-blue-2 text-blue-900 text-sm rounded-md py-1 px-3">
				{{ __('Contact the Administrator to enroll for this course.') }}
			</div>
			<Button v-else @click="enrollStudent()" variant="solid" class="w-full" size="md">
				<span>
					{{ __('Start Course') }}
				</span>
			</Button>
			<Button v-if="canGetCertificate" @click="fetchCertificate()" variant="subtle" class="w-full mt-2" size="md">
				{{ __('Get Certificate') }}
			</Button>
			<router-link v-if="user?.data?.is_moderator || is_instructor()" :to="{
				name: 'CourseForm',
				params: {
					courseName: course.data.name,
				},
			}">
				<Button variant="subtle" class="w-full mt-2" size="md">
					<span>
						{{ __('Edit') }}
					</span>
				</Button>
				
			</router-link>

			<div class="space-y-4">
				<div class="flex justify-between mb-8">
					<button class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
						Add to wishlist
					</button>
					<button class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
						</svg>
						Share
					</button>
				</div>
				<div class="mt-8 font-medium text-ink-gray-9">
					{{ __('This course has:') }}
				</div>
				
				<div class="flex items-center text-ink-gray-9">
					<BookOpen class="h-4 w-4 stroke-1.5" />
					<span class="ml-2">
						{{ course.data.lessons }} {{ __('Lessons') }}
					</span>
				</div>
				<div class="flex items-center text-ink-gray-9">
					<Users class="h-4 w-4 stroke-1.5" />
					<span class="ml-2">
						{{ formatAmount(course.data.enrollments) }}
						{{ __('Enrolled Students') }}
					</span>
				</div>
				<div v-if="parseInt(course.data.rating) > 0" class="flex items-center text-ink-gray-9">
					<Star class="h-4 w-4 stroke-1.5 fill-orange-500 text-gray-50" />
					<span class="ml-2">
						{{ course.data.rating }} {{ __('Rating') }}
					</span>
				</div>

				<div class="space-y-6 mt-4">
					<h3 class="text-lg font-semibold text-gray-900">Course details</h3>


					<div class="space-y-4">
						<div class="flex justify-between items-center border-b border-gray-200 pb-2">
							<h4 class="flex items-center text-sm font-medium text-gray-700">
								<Clock7 class="w-5 h-5 mr-2" /> Duration
							</h4>
							<h4 class="text-sm font-medium text-gray-700">14 Hours</h4>
						</div>

						<!-- Lectures -->
						<div class="flex justify-between items-center border-b border-gray-200 pb-2">
							<h4 class="flex items-center text-sm font-medium text-gray-700">
								<BookOpen class="w-5 h-5 mr-2" /> Lectures
							</h4>
							<h4 class="text-sm font-medium text-gray-700">18</h4>
						</div>

						<!-- Video -->
						<div class="flex justify-between items-center border-b border-gray-200 pb-2">
							<h4 class="flex items-center text-sm font-medium text-gray-700">
								<Video class="w-5 h-5 mr-2" /> Video
							</h4>
							<h4 class="text-sm font-medium text-gray-700">8 Hours</h4>
						</div>

						<!-- Quizzes -->
						<div class="flex justify-between items-center border-b border-gray-200 pb-2">
							<h4 class="flex items-center text-sm font-medium text-gray-700">
								<SquareCheckBig class="w-5 h-5 mr-2" /> Quizzes
							</h4>
							<h4 class="text-sm font-medium text-gray-700">9</h4>
						</div>

						<!-- Level -->
						<div class="flex justify-between items-center border-b border-gray-200 pb-2">
							<h4 class="flex items-center text-sm font-medium text-gray-700">
								<Rows3 class="w-5 h-5 mr-2" /> Level
							</h4>
							<h4 class="text-sm font-medium text-gray-700">Beginner</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { BookOpen, Users, Star, Clock7, Video, SquareCheckBig, Rows3 } from 'lucide-vue-next'
import { computed, inject } from 'vue'
import { Button, createResource } from 'frappe-ui'
import { showToast, formatAmount } from '@/utils/'
import { capture } from '@/telemetry'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = inject('$user')

const props = defineProps({
	course: {
		type: Object,
		default: null,
	},
})

const video_link = computed(() => {
	if (props.course.data.video_link) {
		return 'https://www.youtube.com/embed/' + props.course.data.video_link
	}
	return null
})

function enrollStudent() {
	if (!user.data) {
		showToast(
			__('Please Login'),
			__('You need to login first to enroll for this course'),
			'alert-circle'
		)
		setTimeout(() => {
			window.location.href = `/login?redirect-to=${window.location.pathname}`
		}, 2000)
	} else {
		const enrollStudentResource = createResource({
			url: 'lms.lms.doctype.lms_enrollment.lms_enrollment.create_membership',
		})
		enrollStudentResource
			.submit({
				course: props.course.data.name,
			})
			.then(() => {
				capture('enrolled_in_course', {
					course: props.course.data.name,
				})
				showToast(
					__('Success'),
					__('You have been enrolled in this course'),
					'check'
				)
				setTimeout(() => {
					router.push({
						name: 'Lesson',
						params: {
							courseName: props.course.data.name,
							chapterNumber: 1,
							lessonNumber: 1,
						},
					})
				}, 2000)
			})
	}
}

const is_instructor = () => {
	let user_is_instructor = false
	props.course.data.instructors.forEach((instructor) => {
		if (!user_is_instructor && instructor.name == user.data?.name) {
			user_is_instructor = true
		}
	})
	return user_is_instructor
}

const canGetCertificate = computed(() => {
	if (
		props.course.data?.enable_certification &&
		props.course.data?.membership?.progress == 100
	) {
		return true
	}
	return false
})

const certificate = createResource({
	url: 'lms.lms.doctype.lms_certificate.lms_certificate.create_certificate',
	makeParams(values) {
		return {
			course: values.course,
		}
	},
	onSuccess(data) {
		window.open(
			`/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${data.name
			}&format=${encodeURIComponent(data.template)}`,
			'_blank'
		)
	},
})

const fetchCertificate = () => {
	certificate.submit({
		course: props.course.data?.name,
		member: user.data?.name,
	})
}
</script>

<style scoped>
.course-image {
	height: 168px;
	width: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.default-image {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: theme('colors.green.100');
	color: theme('colors.green.600');
}

.image-placeholder {
	display: flex;
	align-items: center;
	flex: 1;
	font-size: 5rem;
	color: theme('colors.gray.700');
	font-weight: 600;
}

.orange-btn {
	background-color: #e34d00;
	color: #fff;
	min-height: 60px;
  padding: 14px 20px;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #fff;

}

.course-start-div {
	background-color: #fff;

}
</style>
