<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>

      <AppInput
        placeholder="Введите имя"
        :error="errors.name"
        label="Как тебя зовут"
        v-model.trim="name"
      ></AppInput>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          v-model.number="age"
          type="number"
          id="age"
          min="18"
          max="70"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select
          id="city"
          v-model="city"
        >
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Vue CLI"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Vue Router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree"/>Согласен</label>
        </div>
      </div>

      <button
        type="submit"
        class="btn primary"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
export default {
  components: {
    AppInput
  },
  data () {
    return {
      name: '',
      age: 23,
      city: 'spb',
      relocate: 'yes',
      skills: [],
      agree: false,
      errors: {
        name: null
      }
    }
  },
  methods: {
    submitForm () {
      if (this.formIsValid()) {
        console.group('formData')
        console.log(this.name)
        console.log(this.age)
        console.log(this.city)
        console.log(this.relocate)
        console.log(this.skills)
        console.log(this.agree)
        console.groupEnd()
      }
    },
    formIsValid () {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = 'Введите ваше имя!'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    }
  }
}
</script>

<style>
.form-control small {
  color: #e53935;
}
.form-control.invalid input {
  border-color: #e53935;
}
</style>
