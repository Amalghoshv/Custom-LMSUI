import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCourseStore = defineStore('courseStore', () => {
  const currentCategory = ref(null); 
  const categories = ref([]); // List of categories

  // Method to set the current category
  const setCategory = (category) => {
    console.log('Setting category:', category);
    currentCategory.value = category;
  };

  return { currentCategory, categories, setCategory };
});