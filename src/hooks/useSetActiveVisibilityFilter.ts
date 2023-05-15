import { useTodoStore } from '../store/useTodoStore'

export const useSetActiveVisibilityFilter = () =>
  useTodoStore((state) => state.setActiveVisibilityFilter)
