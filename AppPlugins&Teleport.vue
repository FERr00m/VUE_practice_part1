<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="changeLang(lang = lang === 'ru' ? 'en' : 'ru')">{{ $i18n('app.changeBtn') }}</button>
      <button class="btn primary" @click="modalOn">Open modal</button>

      <teleport to="#modal">
        <AppModalView
          v-if="modal"
          @close="modal = false"
        ></AppModalView>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModalView from '@/components/AppModalView'
export default {
  inject: ['changeI18N'],
  components: {
    AppModalView
  },
  methods: {
    changeLang (lang) {
      this.changeI18N(lang)
      this.$forceUpdate()
    },
    modalOn () {
      this.modal = true
    }
  },
  data () {
    return {
      lang: 'ru',
      modal: false
    }
  }
}
</script>

<style>

</style>
