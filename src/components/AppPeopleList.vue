<template>
  <div v-if="people.length !== 0">
    <div class="card inline" v-for="person in people" :key="person.id">
      <h3>{{ person.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">Удалить</button>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Людей пока нет загрузить список</h4>
    <button class="btn" @click="$emit('load')">Загрузить</button>
  </div>

</template>

<script>
export default {
  name: 'AppPeopleList',
  props: ['people'],
  emits: ['load', 'remove']
}
</script>

<style scoped>

</style>
