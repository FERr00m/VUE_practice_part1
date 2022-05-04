<template>
  <hr />
  <ul>
    <li
      v-for="item in news"
      :key="item.id"
    >
      {{ item.title }}
      <span v-if="item.newsWasRead">!!!</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNewsList',
  inject: ['news']
}
</script>

<style scoped>

</style>
