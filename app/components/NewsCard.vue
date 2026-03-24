<template>
  <div @click="$emit('click')" class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
    <img :src="article.urlToImage || placeholder" alt="News Image" class="w-full h-48 object-cover"/>
    <div class="p-4">
      <h2 class="font-semibold text-lg mb-2">{{ article.title }}</h2>
      <p class="text-gray-500 text-sm mb-2">{{ formatDate(article.publishedAt) }}</p>
      <p class="text-gray-700 text-sm line-clamp-3">{{ article.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ article: any }>()
const placeholder = "https://via.placeholder.com/400x200?text=No+Image"
const formatDate = (date: string) => new Date(date).toLocaleDateString()
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>