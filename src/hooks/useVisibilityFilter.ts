import { useTodoStore } from '../store'

export const useVisibilityFilter = () =>
  useTodoStore((state) => state.visibilityFilter)
