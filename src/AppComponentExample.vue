<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинх компоненты</h2>

      <AppButton
        :color="oneColor"
        @action="active = 'One'"
        ref="myBtn"
      >one</AppButton>
      <AppButton
        :color="twoColor"
        @action="active = 'Two'"
      >two</AppButton>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppTextOne from '@/components/AppTextOne'
import AppTextTwo from '@/components/AppTextTwo'

export default {
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  },
  data () {
    return {
      active: 'One'
    }
  },
  mounted () {
    setTimeout(() => {
      this.componentName = 'new'
    }, 2000)
    console.log(this.$refs.myBtn)
  },
  computed: {
    // componentName () {
    //   return 'AppText' + this.active
    // },
    componentName: {
      get () {
        return 'AppText' + this.active
      },
      set (value) {
        console.log(value)
      }
    },
    oneColor () {
      return this.active === 'One' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'Two' ? 'primary' : ''
    }
  }
}
</script>

<style scoped>

</style>
