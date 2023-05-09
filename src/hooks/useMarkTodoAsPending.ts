import { useTodoStore } from '../store/useTodoStore'

export const useMarkTodoAsPending = () =>
  useTodoStore((state) => state.markTodoAsPending)
