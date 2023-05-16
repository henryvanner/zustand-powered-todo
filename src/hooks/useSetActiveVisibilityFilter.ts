import { useTodoStore } from '../store'

export const useSetActiveVisibilityFilter = () =>
  useTodoStore((state) => state.setActiveVisibilityFilter)
