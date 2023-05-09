import { useTodoStore } from '../store/useTodoStore'

export const useMarkTodoAsCompleted = () =>
  useTodoStore((state) => state.markTodoAsCompleted)
