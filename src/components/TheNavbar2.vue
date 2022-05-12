<template>
  <header class="navbar">
    Счетчик {{ counter }}
    <button class="btn" @click="add">+++++</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    // counter () {
    //   return this.$store.getters.counter
    // },
    ...mapGetters('count', ['counter'])
  },
  methods: {
    ...mapMutations('count', {
      addFive: 'add'
    }),
    add () {
      this.addFive({
        value: 5
      })
      // this.add({
      //   value: 5
      // })
      // this.$store.commit('add', {
      //   value: 5
      // })
      // this.$store.commit({
      //   type: 'add',
      //   value: 5
      // })
    }
  }
}
</script>
