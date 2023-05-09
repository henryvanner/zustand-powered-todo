import { render, screen } from '@testing-library/react'
import { TodoListItem } from './TodoListItem'

test('The todo description is present', () => {
  render(
    <TodoListItem
      id='1'
      description='make a cup of coffee'
    />,
  )
  expect(screen.getByText('make a cup of coffee')).toBeInTheDocument()
})

test('The todo is unchecked if it is not completed', () => {
  render(
    <TodoListItem
      id='1'
      description='make a cup of coffee'
    />,
  )
  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).not.toBeChecked()
})

test('The todo is checked if it is completed', () => {
  render(
    <TodoListItem
      id='1'
      description='make a cup of coffee'
      isCompleted
    />,
  )
  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).toBeChecked()
})

test('The todo has a button for removing it', () => {
  render(
    <TodoListItem
      id='1'
      description='make a cup of coffee'
    />,
  )
  expect(
    screen.getByRole('button', { name: 'Remove make a cup of coffee todo' }),
  ).toBeInTheDocument()
})
