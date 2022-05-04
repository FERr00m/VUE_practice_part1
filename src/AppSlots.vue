<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <AppList>
      <template #default="{ idx, iter }">
        <strong>{{ idx }}</strong>
        <span style="color: orange">{{ iter }}</span>
      </template>
    </AppList>

    <AppBlock>
      <p>Это текст блока</p>

      <template v-slot:header>
        <h3>Это заголовок</h3>
      </template>

      <template #footer>
        <hr />
        <small>Это футер</small>
      </template>
    </AppBlock>
  </div>
</template>

<script>
import AppBlock from '@/components/AppBlock'
import AppList from '@/components/AppList'

export default {
  components: {
    AppBlock,
    AppList
  }
}
</script>

<style scoped>

</style>
