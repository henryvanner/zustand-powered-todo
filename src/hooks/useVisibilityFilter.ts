import { useTodoStore } from '../store/useTodoStore'

export const useVisibilityFilter = () =>
  useTodoStore((state) => state.visibilityFilter)
