import { render, screen } from '@testing-library/react'
import { TodoListItem } from './TodoListItem'

test('TodoListItem renders correctly', () => {
  render(
    <TodoListItem
      id='2'
      description='Clean my room'
    />,
  )

  expect(
    screen.getByRole('checkbox', { name: 'Clean my room' }),
  ).toBeInTheDocument()
  expect(screen.getByText('Clean my room')).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Remove Clean my room todo' }),
  ).toBeInTheDocument()
})
