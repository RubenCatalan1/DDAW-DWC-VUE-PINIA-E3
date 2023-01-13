<script>
import { useToDoStore } from '../stores/todo'
import { mapState, mapActions } from 'pinia';
import AppTitle from '../components/AppTitle.vue';
export default {
    components: {
        AppTitle,
    },
    methods: {
        ...mapActions(useToDoStore, ['deleteAll']),
        deleteAllTodos() {
            if(confirm("Quieres borrar todos los elementos?")) {
                this.deleteAll()
            }
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <app-title title="Borrar todas las tareas"></app-title>
    <button @click="deleteAllTodos" class="btn btn-dark">Borrar todo</button>
</template>
