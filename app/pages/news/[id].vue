<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref<any>({})
const placeholder = "https://via.placeholder.com/600x300?text=No+Image"

onMounted(()=>{
  if(route.query.data){
    article.value = JSON.parse(route.query.data as string)
  }
})

const formatDate = (date:string) => new Date(date).toLocaleDateString()
</script>

<template>
    <button @click="$router.back()" class="mb-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Back</button>

    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <p class="text-gray-500 mb-4">{{ formatDate(article.publishedAt) }}</p>
      <img :src="article.urlToImage || placeholder" loading="lazy" class="w-full h-64 object-cover rounded mb-6"/>
      <p class="text-gray-700 mb-4">{{ article.description }}</p>
      <a :href="article.url" target="_blank" class="text-blue-600 underline">Read Full Article</a>
    </div>
</template>
