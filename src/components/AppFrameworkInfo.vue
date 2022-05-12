<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }}</strong></p>
    <p>Версия: <strong>{{ dblVersion }}</strong></p>
    <button @click="changeBack" class="btn warning">-</button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'AppFrameworkInfo',
  props: ['name', 'version'],
  emits: ['changeBack'],
  setup (props, context) {
    function changeBack () {
      context.emit('changeBack', 3)
    }
    return {
      changeBack,
      dblVersion: computed(() => props.version * 2)
    }
  }
}
</script>

<style scoped>

</style>
