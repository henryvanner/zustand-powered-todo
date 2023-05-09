import { render, screen } from '@testing-library/react'
import { AddTodoForm } from './AddTodoForm'

test('The form has a text input for entering the todo description', () => {
  render(<AddTodoForm />)

  expect(screen.getByText('New Todo')).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'New Todo' })).toBeInTheDocument()
})

test('The form has a button for submiting the new todo', () => {
  render(<AddTodoForm />)

  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
})
