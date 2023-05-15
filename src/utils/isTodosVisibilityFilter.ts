import { TodosVisibilityFilter } from '../types'

export const isTodosVisibilityFilter = (
  value: string,
): value is TodosVisibilityFilter => {
  return Object.values<string>(TodosVisibilityFilter).includes(value)
}
