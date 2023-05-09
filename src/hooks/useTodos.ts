import { useTodoStore } from '../store/useTodoStore'

export const useTodos = () => useTodoStore((state) => state.todos)
