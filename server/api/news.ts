import axios from 'axios'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const keyword = query.q || 'news'
  const config = useRuntimeConfig()

  const res = await axios.get('https://newsapi.org/v2/everything', {
    params: {
      q: keyword,
      apiKey: config.newsApiKey  // private key, not public
    }
  })

  return res.data
})