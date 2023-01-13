<script>
import { useToDoStore } from '../stores/todo'
import { mapState, mapActions } from 'pinia';
import AppTitle from '../components/AppTitle.vue';
export default {
    data(){
        return {
            newTodo: ""
        }
    },
    components: {
        AppTitle
    },
    methods: {
        ...mapActions(useToDoStore, ['addTodo']),
        nuevaTarea() {
            if(this.newTodo) {
                this.addTodo(this.newTodo)
            }
            this.newTodo = ""
            this.$router.push('/')
        }
    }

}
</script>

<template>
    <app-title title="Añadir nueva tarea"></app-title>

    <div class='row'>
        
            <form @submit.prevent="nuevaTarea">
                <input class='form-control col-3' v-model="newTodo">
                <input type="submit" value="Añadir" class="btn btn-dark col-2">
            </form>


    </div>
   
</template>
