<script>
  import AppMenu from './components/AppMenu.vue'
  import { useToDoStore } from './stores/todo'
  import { mapActions } from 'pinia'
  
  export default {
    components: {
      AppMenu 
    },
    methods: {
      ...mapActions(useToDoStore, ['chargeTodos'])

    },
    mounted() {
        this.chargeTodos()     
    }
  }

</script>

<template>
  <div class="container">
    <app-menu></app-menu> 
    <router-view></router-view>
  </div>

</template>