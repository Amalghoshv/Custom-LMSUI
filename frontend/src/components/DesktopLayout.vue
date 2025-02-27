<template>
	<div class="relative flex h-full flex-col">
		<div class="h-full flex-1">
			<div class="flex h-screen text-base bg-surface-white">
				<div
					class="relative block min-h-0 flex-shrink-0 overflow-hidden hover:overflow-auto"
				>
					<!-- <AppSidebar /> -->
				</div>
				<div class="w-full overflow-auto" id="scrollContainer">
					<TopNav />
					<MainNav  @search="handleSearch"/>
					<Banner @select-category="handleCategorySelect"  :category="courseStore.currentCategory"/>
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useCourseStore } from '@/stores/courseStore'
import AppSidebar from './AppSidebar.vue'
import Banner from './Modals/Banner.vue'
import MainNav from './Modals/MainNav.vue'
import TopNav from './Modals/TopNav.vue'
const courseStore = useCourseStore()
import { watch,ref,provide } from 'vue'
const searchQuery = ref('');
const handleCategorySelect = (category) => {
    courseStore.setCategory(category)
}
const handleSearch = (query) => {
    searchQuery.value = query;
};
provide('searchQuery', searchQuery);
const props = defineProps({
  category: String,
});



watch(() => props.category, (newCategory) => {
  console.log('Banner updated for category:', newCategory);
});

</script>
