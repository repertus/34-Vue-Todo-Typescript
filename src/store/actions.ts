import { ActionContext, ActionTree } from 'vuex'
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

import State from './state'
import { Todo } from './todo/todo'

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api'
})

const actions: ActionTree<State, State> = {
  addTask({commit}: ActionContext<State, State>, state: State) {
    console.log(state)  
    instance.post('/todos', state.todo)
      .then((response: AxiosResponse) => {
        commit('addTask', response.data.todo)
      })
      .catch((error: AxiosError) => {
        console.log(error)
      })
  },
    deleteTask({commit}: ActionContext<State, State>, todo: Todo) {
        instance.delete('/todos/' + todo._id)
            .then((response: AxiosResponse) => {
                commit('deleteTask', todo)
            })
            .catch((error: AxiosError) => {
                console.log(error)
            })
    },
    getTasks({commit}: ActionContext<State, State>) {
        instance.get('/todos')
            .then((response: AxiosResponse) => {
                commit('getTasks', response.data.todos)
            })
            .catch((error: AxiosError) => {
                console.log(error)
            })
    },
    updateTask({commit}: ActionContext<State, State>, todo: Todo) {
        instance.put('todos' + '/' + todo._id, todo)
            .then((response: AxiosResponse) => {
                commit('updateTask', response.data.todo)
            })
            .catch((error: AxiosError) => {
                console.log(error)
            })
    }
}

export default actions