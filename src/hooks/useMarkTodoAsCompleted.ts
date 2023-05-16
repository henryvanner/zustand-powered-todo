import { useTodoStore } from '../store'

export const useMarkTodoAsCompleted = () =>
  useTodoStore((state) => state.markTodoAsCompleted)
