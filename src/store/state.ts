import { Todo } from './todo/todo'

export default class State {
    public todos: Todo[]
    public todo: Todo

    constructor() {
        this.todos = []

        this.todo = {
            task: '',
            type: 0,
            priority: '',
            complete: false
        }
    }
}