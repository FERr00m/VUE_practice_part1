<template>
  <AppAlert2
    v-if="alert"
    type="primary"
    title="Внимание!"
    text="Это очень важное сообщение, будьте бдительны"
    @close="alert = false"
  ></AppAlert2>
  <div class="container">
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert2 from '@/components/AppAlert2'
import alertMixin from '@/mixins/alertMixin'
export default {
  mixins: [alertMixin],
  name: 'AppBlock2',
  components: {
    AppAlert2
  }
}
</script>

<style>

</style>
