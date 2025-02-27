<template>
	<div v-if="course.data">
		<!-- <header
			class="sticky top-0 z-10 flex items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"
		>
			<Breadcrumbs class="h-7" :items="breadcrumbs" />
		</header> -->
		<div style="display: flex; align-items: flex-start">
			<div
				class="m-5 "
				style="
                    padding: 50px;
					margin: 0;
                    height: 400px;
					background-color: #001931;
					width: 100%;
					box-sizing: border-box;
				"
			>
				<div class="flex justify-between w-full">
					<div class="md:w-2/3">
						<div>
							<Tooltip
								v-if="parseInt(course.data.rating) > 0"
								:text="__('Average Rating')"
								class="flex items-center"
							>
								<Star class="h-5 w-5 text-gray-100 fill-orange-500" />
								<span class="ml-1 text-ink-gray-7">
									{{ course.data.rating }}
								</span>
							</Tooltip>
							<span v-if="parseInt(course.data.rating) > 0" class="mx-3"
								>&middot;</span
							>
						</div>
						<div class="text-4xl font-bold text-white" style="font-size: 36px">
							{{ course.data.title }}
						</div>
						<div class="my-3 leading-6 text-white">
							{{ course.data.short_introduction }}
						</div>
						<div class="flex items-center">
							<span v-if="course.data.enrollment_count" class="mx-3"
								>&middot;</span
							>
						</div>
						<div>
							<div class="flex items-center">
								
							</div>
							<div class="flex items-center gap-8">
								<!-- Instructor -->
								<div class="flex items-center gap-3">
									<span
										class="h-6 mr-1"
										:class="{
											'avatar-group overlap':
												course.data.instructors.length > 1,
										}"
									>
										<UserAvatar
											v-for="instructor in course.data.instructors"
											:user="instructor"
										/>
									</span>

									<div class="e">
										<div  style="  color: rgba(255,255,255,.7);" class="text-sm">Instructor</div>
										<div class="font-medium text-white">
											<CourseInstructors
												:instructors="course.data.instructors"
											/>
										</div>
									</div>
								</div>

								<!-- Category -->
								<div class="flex items-center gap-2">
									<svg
										class="w-6 h-6 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
									<div class="">
										<div style="color: rgba(255,255,255,.7);" class="text-sm ">Category</div>
										<div class="font-medium text-white">{{ course.data.category }}</div>
									</div>
								</div>

								<!-- Students Enrolled -->
								<div class="flex items-center gap-2">
									<svg
										class="w-6 h-6 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									<div class="">
										<div style="  color: rgba(255,255,255,.7);" class="text-sm ">Students enrolled</div>
										<div class="font-medium text-white">{{ course.data.enrollments }}</div>
									</div>
								</div>
							</div>
							<div>
								<Tooltip
									v-if="course.data.enrollment_count"
									:text="__('Enrolled Students')"
									class="flex items-center"
								>
									<Users class="h-4 w-4 text-ink-gray-7" />
									<span class="ml-1">
										{{ course.data.enrollment_count_formatted }}
									</span>
								</Tooltip>
							</div>
						</div>
						<div class="flex mt-3 mb-4 w-fit">
							<Badge
								theme="gray"
								size="lg"
								class="mr-2 text-ink-gray-9"
								v-for="tag in course.data.tags"
							>
								{{ tag }}
							</Badge>
						</div>
						<CourseCardOverlay
							:course="course"
							class="md:hidden mb-4"
							style="
								
								padding: 20px;
								box-sizing: border-box;
								height: fit-content;
								justify-items: end;
							"
						/>
					</div>
					<div class="hidden md:block">
						<CourseCardOverlay
							:course="course"
							style="
								
								width: 60%;
								padding: 20px;
								box-sizing: border-box;
								height: fit-content;
								justify-items: end;
							"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="w-[60%] m-8 border shadow-md">
			<div class="flex border-b">
				<button
					v-for="tab in tabs"
					:key="tab.label"
					@click="activeTab = tab.label"
					class="px-4 py-2 -mb-px transition-all duration-200 ease-in-out"
					:class="[
						activeTab === tab.label
							? 'border-b-2 border-orange-500 text-orange-600'
							: 'text-gray-600 hover:text-orange-500 hover:border-b-2 hover:border-orange-200',
					]"
				>
					{{ tab.label }}
				</button>
			</div>
			<div class="p-4">
				<div v-if="course.data">
					<div
						v-show="activeTab === 'Description'"
						v-html="course.data.description"
                        style="color: #4d5e6f;font-family: 'Open Sans', serif;font-size: 16px;"
					></div>
					<div v-show="activeTab === 'Curriculum'">
						<div class="mt-10">
							<CourseOutline
								:title="__('Course Outline')"
								:courseName="course.data.name"
								:showOutline="true"
							/>
						</div>
					</div>
				</div>
				<div v-show="activeTab === 'Reviews'">
					<CourseReviews
						:courseName="course.data.name"
						:avg_rating="course.data.rating"
						:membership="course.data.membership"
					/>
				</div>
			</div>
		</div>
	</div>
    <footer class="bg-[#273144] text-white flex flex-col items-center">
        <div class="max-w-7xl w-full p-10 grid grid-cols-3 gap-10">
            <div>
                <h2 class="font-semibold mb-2">ABOUT</h2>
                <p class="text-sm leading-6">
                    In the digital age, coding is more than a skill—it’s a global language that unlocks innovation, creativity, and career opportunities. Recognizing this, Million Coders emerges as a pioneering for-profit community with a mission to democratize access to coding education.
                </p>
            </div>
            <div>
                <h2 class="font-semibold mb-2">CONTACT</h2>
                <p class="text-sm leading-6">
                    704, City Gate Tower, Al Ittihad Road, Sharjah, UAE
                </p>
                <p>
                    Tel.: +971 6745 2556
                </p>
                <p><a href="mailto:info@millioncoders.org">info@millioncoders.org</a></p>
            </div>
            <div>
                <h2 class="font-semibold mb-2">SOCIAL NETWORK</h2>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { createResource, Breadcrumbs, Badge, Tooltip } from 'frappe-ui'
import { computed, reactive, defineComponent, ref } from 'vue'
import { Users, Star } from 'lucide-vue-next'
import CourseCardOverlay from '@/components/CourseCardOverlay.vue'
import CourseOutline from '@/components/CourseOutline.vue'
import CourseReviews from '@/components/CourseReviews.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { updateDocumentTitle } from '@/utils'
import CourseInstructors from '@/components/CourseInstructors.vue'

const activeTab = ref('Description')

const tabs = [
	{ label: 'Description' },
	{ label: 'Curriculum' },
	{ label: 'Reviews' },
]

const props = defineProps({
	courseName: {
		type: String,
		required: true,
	},
})

const course = createResource({
	url: 'lms.lms.utils.get_course_details',
	cache: ['course', props.courseName],
	params: {
		course: props.courseName,
	},
	auto: true,
})

const pageMeta = computed(() => {
	return {
		title: course?.data?.title,
		description: course?.data?.short_introduction,
	}
})

updateDocumentTitle(pageMeta)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.avatar-group {
	display: inline-flex;
	align-items: center;
}

.avatar-group .avatar {
	transition: margin 0.1s ease-in-out;
}

/* Tab Labels */
.tab-label {
	padding: 10px 15px;
	cursor: pointer;
	border: 1px solid #ddd;
	background-color: #f9f9f9;
	margin-right: 5px;
	border-radius: 4px 4px 0 0;
}

.tab-label.active {
	background-color: #fff;
	border-bottom: 1px solid #fff;
	/* Remove border at the bottom for active tab */
	font-weight: bold;
}

/* Tab Content */
.tab-content {
	border: 1px solid #ddd;
	padding: 15px;
	border-radius: 0 4px 4px 4px;
	background-color: #fff;
}
</style>
