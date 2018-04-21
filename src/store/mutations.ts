import { MutationTree } from 'vuex'
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

import State from './state'
import { Todo } from './todo/todo';

const mutations: MutationTree<State> = {
    addTask(state: State, todo: Todo): void {
        state.todos.push(todo)
        state.todo = {
            _id: '',
            task: '',
            type: 0,
            priority: '',
            complete: false
        }
    },
    deleteTask(state: State, todo: Todo) {
        let index = state.todos.indexOf(todo)
        return state.todos.splice(index, 1)
    },
    getTasks(state: State, todos: Todo[]) {
        return state.todos = todos
    },
    alphaOrder(state: State) {
        state.todos.sort((last: Todo, next: Todo) => {
            const a: string = last.task
            const b: string = next.task
            return a > b ? 1 : -1
        })
    },
    highPriority(state: State) {
        state.todos.sort((last: Todo, next: Todo) => {
            const a: string = last.priority
            const b: string = next.priority
            return a > b ? 1 : -1
        })
    },
    lowPriority(state: State) {
        state.todos.sort((last: Todo, next: Todo) => {
            const a: string = last.priority
            const b: string = next.priority
            return b > a ? 1 : -1
        })
    },
    setTask (state: State, value: string) {
        return state.todo.task = value
    },
    setPriority (state: State, value: string) {
        return state.todo.priority = value
    },
    setType (state: State, value: number) {
      return state.todo.type = value
    },
    updateTask (state: State, updatedTodo: Todo) {
        const index = state.todos.findIndex((todo: Todo) => todo._id === updatedTodo._id)
        if (state.todos[index].task !== updatedTodo.task) {
            return state.todos[index].task = updatedTodo.task
        }
        else if (state.todos[index].complete !== updatedTodo.complete) {
            return state.todos[index].complete = updatedTodo.complete
        }
        return null
    }
}

export default mutations