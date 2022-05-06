<template>
  <AppAlert2
    v-if="alert"
    type="danger"
    title="Внимание!"
    text="Это очень важное сообщение, будьте бдительны"
    closable
    @close="alert = false"
  ></AppAlert2>
  <div class="container">
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>

    <AppBlock2></AppBlock2>
  </div>
</template>

<script>
import AppAlert2 from '@/components/AppAlert2'
import AppBlock2 from '@/components/AppBlock2'
import alertMixin from '@/mixins/alertMixin'
export default {
  mixins: [alertMixin],
  components: {
    AppAlert2,
    AppBlock2
  }
}
</script>

<style>

</style>
