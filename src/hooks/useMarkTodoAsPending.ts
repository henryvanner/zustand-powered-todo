import { useTodoStore } from '../store'

export const useMarkTodoAsPending = () =>
  useTodoStore((state) => state.markTodoAsPending)
