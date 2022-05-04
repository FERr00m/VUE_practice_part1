<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <AppButton
      @action="open"
    >
      {{ isOpenLocal ? 'Закрыть' : 'Открыть' }}
    </AppButton>
    <AppButton
      v-if="newsWasRead"
      color="danger"
      @action="$emit('unread', id)"
    >
      Отметить непрочитанной
    </AppButton>
    <div v-if="isOpenLocal">
      <hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim iure molestias necessitatibus quo tenetur?
      </p>
      <AppButton
        v-if="!newsWasRead"
        @action="wasRead"
        color="primary"
      >
        Прочитано
      </AppButton>

      <AppNewsList />
    </div>

  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppNewsList from '@/components/AppNewsList'

export default {
  name: 'AppNews',
  components: {
    AppButton,
    AppNewsList
  },
  emits: {
    'open-news': null,
    'was-read' (id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unread: null
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    newsWasRead: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // emits: ['open-news'],
  data () {
    return {
      isOpenLocal: this.isOpen
    }
  },
  methods: {
    open () {
      this.isOpenLocal = !this.isOpenLocal
      if (this.isOpenLocal) {
        this.$emit('open-news')
      }
    },
    wasRead () {
      this.isOpenLocal = false
      this.$emit('was-read', this.id)
    }
    // unRead () {
    //   this.$emit('unread', this.id)
    // }
  }
}
</script>

<style scoped>

</style>
