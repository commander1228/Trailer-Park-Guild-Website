export const Todo_STATUS = ['NOT_STARTED','IN_PROGRESS','COMPLETED'] as const

export type TodoStatus = (typeof Todo_STATUS)[number]

export const Todo_STATUS_LABELS: Record<TodoStatus, string> = {
    NOT_STARTED: 'Not started',
    IN_PROGRESS: 'In progress',
    COMPLETED: 'completed',
}

export interface Todo{
    id:string
    title:string
    description:string
    createdDate:string
    deleted: boolean
    status: TodoStatus
}

export type CreateTodo = Pick<Todo, 'title' | 'description'>