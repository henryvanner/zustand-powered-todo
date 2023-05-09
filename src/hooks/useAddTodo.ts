import { useTodoStore } from '../store/useTodoStore'

export const useAddTodo = () => useTodoStore((state) => state.addTodo)
