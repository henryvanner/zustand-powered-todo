import { useTodoStore } from '../store'

export const useDeleteTodo = () => useTodoStore((state) => state.deleteTodo)
