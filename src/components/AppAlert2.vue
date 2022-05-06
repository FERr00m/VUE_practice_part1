<template>
  <div
    class="alert"
    :class="type"
  >
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button v-if="closable" @click="$emit('close')" :class="type" class="btn">Закрыть</button>
  </div>
</template>

<script>
export default {
  name: 'AppAlert2',
  emits: ['close'],
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (val) {
        return ['primary', 'warning', 'danger'].includes(val)
      }
    },
    title: String,
    text: String,
    closable: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
