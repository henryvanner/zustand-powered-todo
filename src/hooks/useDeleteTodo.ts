import { useTodoStore } from '../store/useTodoStore'

export const useDeleteTodo = () => useTodoStore((state) => state.deleteTodo)
