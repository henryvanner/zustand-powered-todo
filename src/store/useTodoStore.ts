import { v4 } from 'uuid'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { create } from 'zustand'
import { Todo, TodosRepository } from '../models'
import { TodoState, TodosVisibilityFilter } from '../types'

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  visibilityFilter: TodosVisibilityFilter.ALL_TODOS,
  addTodo: (description) =>
    set(({ todos }) => {
      const todosRepository = plainToInstance(TodosRepository, { todos })
      const todo = plainToInstance(Todo, {
        id: v4(),
        description,
        completed: false,
      })
      todosRepository.addTodo(todo)
      const updatedTodosRepository = instanceToPlain(todosRepository)
      return updatedTodosRepository
    }),
  markTodoAsCompleted: (id) =>
    set(({ todos }) => {
      const todosRepository = plainToInstance(TodosRepository, { todos })
      todosRepository.findByIdAndUpdate(id, { completed: true })
      const updatedTodosRepository = instanceToPlain(todosRepository)
      return updatedTodosRepository
    }),
  markTodoAsPending: (id) =>
    set(({ todos }) => {
      const todosRepository = plainToInstance(TodosRepository, { todos })
      todosRepository.findByIdAndUpdate(id, { completed: false })
      const updatedTodosRepository = instanceToPlain(todosRepository)
      return updatedTodosRepository
    }),
  deleteTodo: (id) =>
    set(({ todos }) => {
      const todosRepository = plainToInstance(TodosRepository, { todos })
      todosRepository.findByIdAndDelete(id)
      const updatedTodosRepository = instanceToPlain(todos)
      return updatedTodosRepository
    }),
  setActiveVisibilityFilter: (visibilityFilter: TodosVisibilityFilter) =>
    set(() => ({ visibilityFilter })),
}))
