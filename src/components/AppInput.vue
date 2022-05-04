<template>
  <div class="form-control" :class="{invalid: error}">
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onChange"
    >
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    error: String
  },
  data () {
    return {
      id: 'input-' + Math.random()
    }
  },
  methods: {
    onChange (e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
