<template>
  <the-navbar></the-navbar>
  <div className="container with-nav">
    <div className="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ( {{ doubleCounter }} )</h2>
      <button @click="add" class="btn">+</button>
      <button @click="incrementAsync({
        value: 10,
        time: 300
      })" class="btn danger">+10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar2'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapActions('count', ['incrementAsync']),
    ...mapMutations('count', {
      add: 'increment'
    })
    // add () {
    //   this.increment()
    // }
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     time: 300
    //   })
    // }
  }
}
</script>
