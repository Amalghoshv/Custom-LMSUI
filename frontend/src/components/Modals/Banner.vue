<template>
    <div class="categories-courses-container">
        <div class="categories-courses">
            <div class="categories-courses-single" v-for="category in categories" :key="category.value">
                <a href="#" class="heading_font" @click.prevent="selectCategory(category.value)">
                    <component :is="category.icon" class="icon" />
                    <span>{{ category.label }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Palette, Settings, BriefcaseBusiness } from 'lucide-vue-next';
import { defineEmits } from 'vue';
const emit = defineEmits(['select-category']);

const categories = [
    { label: 'Business', value: 'Business', icon: BriefcaseBusiness },
    { label: 'Design', value: 'Design', icon: Palette },
    { label: 'Development', value: 'Web Development', icon: Settings },
];

const selectCategory = (category) => {
    emit('select-category', category);
};

</script>

<style>
.categories-courses-container {
    display: flex;
    justify-content: center; 
    background-color: #e34d00; 
    top: 0;
    z-index: 10;
}

.categories-courses {
    display: flex;
    justify-content: center; 
    gap: 20px;
    max-width: 800px; 
    width: 100%; 
}

.categories-courses-single {
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-size: 15px; 
    cursor: pointer;
    transition: background-color 0.3s ease; 
    padding: 10px; 
    min-width: 120px; 
    box-sizing: border-box; 
}

.categories-courses-single:hover {
    background-color: #4C8099; 
}

.categories-courses-single a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 10px; 
    width: 100%; 
    box-sizing: border-box; 
}

.icon {
    width: 34px; 
    height: 34px;
    margin-bottom: 8px; 
    color: #fff;
    stroke-width: 1px;
}

.categories-courses-single span {
    font-size: 14px;
    color: white; 
}
</style>