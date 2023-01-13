<script>
import TodoItem from "../components/TodoItem.vue"
import AppTitle from "../components/AppTitle.vue"
import { useToDoStore } from '../stores/todo'
import { mapState, mapActions } from 'pinia'

export default {
    components: {
        TodoItem,
        AppTitle
    },
    computed: {  
        ...mapState(useToDoStore, {
                todos : 'todos'
        })   
    },
    methods: {
  
        
    }
}
</script>
<template>
    <app-title title="Cosas que hacer este año"></app-title>

    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <table class="table table-striped table-hover table-responsive">
                <thead class="bg-dark">
                    <tr class="text-white text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <todo-item v-for="elem in todos" :key="elem.id" v-bind:elem="elem"></todo-item>                </tbody>
                <tfoot>
                    <th v-if="todos.length">Cosas para hacer: {{todos.filter(item => !item.done).length}}</th>
                    <th v-else>No hay elementos</th>
                    <th></th>
                    <th></th>
                    
                </tfoot>
            </table>
        </div>
    </div>
</template>

