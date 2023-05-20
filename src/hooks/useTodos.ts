import { useMemo } from 'react'
import { useTodoStore } from '../store'
import { TodosVisibilityFilter } from '../types'
import { filterTodos } from '../utils'

type UseTodosOptions = {
  visibilityFilter?: TodosVisibilityFilter
}

export const useTodos = (options?: UseTodosOptions) => {
  const { visibilityFilter = TodosVisibilityFilter.ALL_TODOS } = options ?? {}
  const todos = useTodoStore((state) => state.todos)
  const filteredTodos = useMemo(
    () => filterTodos(todos, visibilityFilter),
    [todos, visibilityFilter],
  )
  return filteredTodos
}
