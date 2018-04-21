import { GetterTree } from 'vuex'

import State from './state'

const getters: GetterTree<State, State> = {
    task(state: State): string {
        return state.todo.task
    },
    priority(state: State): string {
        return state.todo.priority
    },
    type(state: State): number {
        return state.todo.type
    },
    todos(state: State): Array<Object> {
        return state.todos
    }
}

export default getters