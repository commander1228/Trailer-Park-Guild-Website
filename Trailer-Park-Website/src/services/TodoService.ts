import { postApi } from "./api";
import type { CreateTodo, Todo } from "@/types/Todo";

export function createTodo(todo: CreateTodo): Promise<Todo> {
    return postApi<Todo,CreateTodo>('/api/todos',todo)
}