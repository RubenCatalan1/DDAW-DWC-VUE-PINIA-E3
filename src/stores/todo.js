import { defineStore } from 'pinia'
import axios from "axios"

const url= "http://localhost:3000"

export const useToDoStore = defineStore('todo', {
  state: () => ({
      todos: [],
  }),
  getters: {

  },
  actions: {
    async addTodo(title) {
        let newTodo = {
            title: title,
            done: false
        }
        try {
            const response = await axios.post(url + "/todos", newTodo);
            this.todos.push(response.data)
            
        } catch(error) {
            alert("Error al añadir ToDo: " + error)
        }

    },
    deleteAll() {
        this.todos.forEach(elem => {
            this.delTodo(elem.id)
        })
    },
    async delTodo(id) {
        try {
            let respose = await axios.delete(url + '/todos/' + id)
            let index = this.todos.findIndex(item => item.id === id)
            this.todos.splice(index, 1)
        } catch (error) {
            alert("Error al borrar todo: " + error)
        }
    },
    changeState(id) {
        let elem = this.todos.find(item => item.id === id)
        
        try {
            const response = axios.put(url + '/todos/' + id, {
                title: elem.title,
                done: !elem.done

            })
            elem.done = !elem.done

        } catch (error) {
            alert("Error al cambiar el estado: " + error)
        }
    },
    async chargeTodos() {
        try {
            const response = await axios.get(url + '/todos')
            this.todos = response.data
        } catch(error) {
            alert('Error ' + error)
        }
      
    
    }
  },
})