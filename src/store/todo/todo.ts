export interface Todo {
    _id?: string
    task: string
    type: number
    priority: string
    complete: boolean
}

interface Todos extends Array<Todo>{}