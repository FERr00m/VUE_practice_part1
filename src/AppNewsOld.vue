<template>
  <div class="card">
    <h2>Актуальные новости {{ now }}</h2>
    <span>Открыто {{ openRate }} | Прочитано {{ readRate }}</span>
  </div>

  <AppNews
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    :is-open="item.isOpen"
    :news-was-read="item.newsWasRead"
    @open-news="openNews"
    @was-read="wasRead"
    @unread="unReadNews"
  />
</template>

<script>
import AppNews from '@/components/AppNews'
export default {
  name: 'App',
  components: {
    AppNews
  },
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          id: 1,
          title: 'News #1',
          isOpen: false,
          newsWasRead: false
        },
        {
          id: 2,
          title: 'News #2',
          isOpen: false,
          newsWasRead: false
        },
        {
          id: 3,
          title: 'News #3',
          isOpen: false,
          newsWasRead: false
        }
      ]
    }
  },
  provide () {
    return {
      news: this.news
    }
  },
  methods: {
    openNews () {
      this.openRate++
    },
    wasRead (id) {
      this.readRate++
      const item = this.news.find(item => item.id === id)
      item.newsWasRead = true
    },
    unReadNews (id) {
      this.readRate--
      const item = this.news.find(item => item.id === id)
      item.newsWasRead = false
    }
  }
}
</script>

<style scoped>
h2 {
  color: #e53935;
}
</style>
