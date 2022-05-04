<template>
  <div class="container">
    <AppAlert
      :alert="alert"
      @close="alert = null"
    ></AppAlert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с БД</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" type="submit" :disabled="name.length === 0">Создать человека</button>
    </form>

    <AppLoader v-if="loading"></AppLoader>
    <AppPeopleList
      v-else
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
    />
  </div>
</template>

<script>
import AppPeopleList from '@/components/AppPeopleList'
import axios from 'axios'
import AppAlert from '@/components/AppAlert'
import AppLoader from '@/components/AppLoader'

export default {
  components: {
    AppPeopleList,
    AppAlert,
    AppLoader
  },
  data () {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted () {
    this.loadPeople()
  },
  methods: {
    async createPerson () {
      // URL DB https://vue-with-http-beffb-default-rtdb.europe-west1.firebasedatabase.app/people.json
      const response = await fetch('https://vue-with-http-beffb-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const firebaseData = await response.json()
      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      })
      this.name = ''
    },
    loadPeople () {
      this.loading = true
      setTimeout(async () => {
        try {
          const { data } = await axios.get('https://vue-with-http-beffb-default-rtdb.europe-west1.firebasedatabase.app/people.json')
          if (!data) {
            throw new Error('В БД нет людей')
          }
          this.people = Object.keys(data).map(key => {
            return {
              id: key,
              firstName: data[key].firstName
            }
          })
          this.loading = false
        } catch (e) {
          this.alert = {
            type: 'danger',
            title: 'Ошибка!',
            text: e.message
          }
          this.loading = false
        }
      }, 1500)
    },
    async removePerson (id) {
      try {
        const person = this.people.find(person => person.id === id).firstName
        await axios.delete(`https://vue-with-http-beffb-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Полюзователь ${person} был удалён`
        }
      } catch (e) {
      }
    }
  }
}
</script>

<style>

</style>
