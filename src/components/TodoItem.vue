<script>
import { useToDoStore } from '../stores/todo'
import { mapState, mapActions } from 'pinia'

export default {
    props: {
        elem: Object,
    }, 
    methods: {
        ...mapActions(useToDoStore, ['changeState', 'delTodo']),
        removeTodo() {
            if(confirm("Quieres borrar la tarea " + this.elem.title)) {
                this.delTodo(this.elem.id) 
            }
        },
    }
}
</script>
<template>
    <tr class="text-center">
        <th scope="row">{{elem.id}}</th>
        <td> 
            <del v-if="elem.done">{{elem.title}}</del>
            <span v-else>{{elem.title}}</span>
        </td>
        <td>
            <input :checked="elem.done" @click="changeState(elem.id)" type="checkbox">
        </td>
        <td>
            <button @click="removeTodo()" class="bi bi-trash-fill btn btn-dark"></button>
        </td>
    </tr>
</template>

