import { useTodoStore } from '../store'

export const useAddTodo = () => useTodoStore((state) => state.addTodo)
