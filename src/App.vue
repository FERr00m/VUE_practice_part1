<template>
  <div className="container">
    <div className="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <app-framework-info
        :name="name"
        :version="version"
        @changeBack="change"
      ></app-framework-info>

      <div class="form-control">
<!--        <input type="text" ref="textInput">-->
        <input type="text" v-model="firstName">
      </div>

      <button className="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import AppFrameworkInfo from '@/components/AppFrameworkInfo'

export default {
  components: { AppFrameworkInfo },
  setup () {
    const name = ref('VueJS')
    const version = ref(3)
    // const textInput = ref(null)
    const firstName = ref('')

    function changeInfo () {
      name.value = 'Vue JS!'
      version.value = 42
      // console.log(textInput.value.value)
    }

    function change (num) {
      version.value = num
    }
    // const dblVersion = computed(() => version.value * 2)

    watch(firstName, (newValue, oldValue) => {
      console.log(newValue)
    })

    return {
      name,
      version,
      firstName,
      change,
      changeInfo
    }
  }
  // data () {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo () {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>
