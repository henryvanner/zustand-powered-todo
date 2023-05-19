import { v4 } from 'uuid'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { create } from 'zustand'
import { Todo, TodosRepository } from '../models'
import { TodoState, TodosVisibilityFilter } from '../types'

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  visibilityFilter: TodosVisibilityFilter.ALL_TODOS,
  addTodo: (description) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      const todo = plainToInstance(Todo, {
        id: v4(),
        description,
        completed: false,
      })
      todos.addTodo(todo)
      const updatedTodos = instanceToPlain(todos)
      return updatedTodos
    }),
  markTodoAsCompleted: (id) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      const todo = todos.findById(id)

      if (!todo) return {}

      todo.completed = true
      const updatedTodos = instanceToPlain(todos)

      return updatedTodos
    }),
  markTodoAsPending: (id) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      const todo = todos.findById(id)

      if (!todo) return {}

      todo.completed = false
      const updatedTodos = instanceToPlain(todos)

      return updatedTodos
    }),
  deleteTodo: (id) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      todos.deleteTodo(id)
      const updatedTodos = instanceToPlain(todos)

      return updatedTodos
    }),
  setActiveVisibilityFilter: (visibilityFilter: TodosVisibilityFilter) =>
    set(() => ({ visibilityFilter })),
}))
