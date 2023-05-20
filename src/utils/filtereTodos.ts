import { plainToInstance } from 'class-transformer'
import { Todo, TodosRepository } from '../models'
import { TodosVisibilityFilter } from '../types'

export const filterTodos = (
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
