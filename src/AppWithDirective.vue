<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].hover="myColor">Directives</h2>

      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp">
      </div>

      <button @click="myColor = myColor === 'darkblue' ? 'green' : 'darkblue'" class="btn">btn</button>
      <button @click="type = type === 'color' ? 'backgroundColor' : 'color'" class="btn">btn2</button>
    </div>
  </div>
</template>

<script>

import focusDirective from '@/directives/focusDirective'
import colorDirective from '@/directives/colorDirective'

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective
  },
  data () {
    return {
      myColor: 'green',
      type: 'color'
    }
  }
}
</script>

<style>

</style>
