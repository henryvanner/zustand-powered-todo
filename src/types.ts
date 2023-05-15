export enum TodosVisibilityFilter {
  ALL_TODOS = '1',
  COMPLETED_ONLY = '2',
  PENDING_ONLY = '3',
}

export type TodoState = {
  todos: {
    id: string
    description: string
    completed: boolean
  }[]
  visibilityFilter: TodosVisibilityFilter
  addTodo: (description: string) => void
  markTodoAsCompleted: (id: string) => void
  markTodoAsPending: (id: string) => void
  deleteTodo: (id: string) => void
  setActiveVisibilityFilter: (filter: TodosVisibilityFilter) => void
}
