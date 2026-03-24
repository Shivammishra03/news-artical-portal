import { ref } from 'vue'
import axios from 'axios'

export const useNews = () => {
  const allArticles = ref<any[]>([])
  const loading = ref(false)
  const PAGE_SIZE = 10 

  const fetchNews = async (keyword = '') => {
    loading.value = true
    try {
      const config = useRuntimeConfig()
      const res = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: keyword || 'news',
          apiKey: config.public.newsApiKey
        }
      })
      allArticles.value = res.data.articles
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const getPage = (page: number) => {
    const start = (page - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    return allArticles.value.slice(start, end)
  }

  const totalPages = () => Math.ceil(allArticles.value.length / PAGE_SIZE)

  return { allArticles, loading, fetchNews, getPage, totalPages, PAGE_SIZE }
}