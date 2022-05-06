<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модалки</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda dignissimos est eveniet fugit id iure minus nam nisi voluptas.</p>
  </div>
</template>

<script>
export default {
  name: 'AppModalView',
  emits: ['close']
}
</script>

<style scoped>

</style>
