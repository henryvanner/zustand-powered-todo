import { useMemo } from 'react'
import { plainToInstance } from 'class-transformer'
import { useTodoStore } from '../store'
import { Todo, TodosRepository } from '../models'
import { TodosVisibilityFilter } from '../types'

type UseTodosOptions = {
  visibilityFilter?: TodosVisibilityFilter
}

const filterTodos = (
  todos: Todo[],
  visibilityFilter: TodosVisibilityFilter,
) => {
  const todosRepository = plainToInstance(TodosRepository, { todos })
  if (visibilityFilter === TodosVisibilityFilter.COMPLETED_ONLY)
    return todosRepository.completedTodos
  if (visibilityFilter === TodosVisibilityFilter.PENDING_ONLY)
    return todosRepository.pendingTodos
  return todosRepository.todos
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
