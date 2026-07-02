<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import NewsCard from '~/components/NewsCard.vue'
import { useNews } from '~/composables/useNews'
import { useRouter } from 'vue-router'

const router = useRouter()
const { allArticles, loading, fetchNews, getPage, totalPages } = useNews()

const page = ref(1)
const keyword = ref('')
const pagedArticles = computed(() => getPage(page.value))
const totalPagesNum = computed(() => totalPages())

const searchNews = () => {
  page.value = 1
  fetchNews(keyword.value)
}

const goToDetails = (article: any) => {
  router.push({
    name: 'news-id',
    params: { id: encodeURIComponent(article.url) },
    query: { data: JSON.stringify(article) }
  })
}
watch(allArticles, () => {
  page.value = 1
})

onMounted(() => fetchNews())
</script>

<template>
    <div class="mb-6">
      <input
        v-model="keyword"
        @keyup.enter="searchNews"
        type="text"
        placeholder="Search news..."
        class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div v-if="loading" class="text-center py-10 text-gray-500">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard
          v-for="(article, idx) in pagedArticles"
          :key="idx"
          :article="article"
          @click="goToDetails(article)"
        />
      </div>
      <div class="flex justify-center items-center gap-2 mt-8 flex-wrap">
        <button
          v-for="p in totalPagesNum"
          :key="p"
          @click="page = p"
          :class="page === p ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
          class="px-4 py-2 rounded hover:bg-blue-400 hover:text-white"
        >
          {{ p }}
        </button>
      </div>
    </div>
</template>