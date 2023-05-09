import { render, screen } from '@testing-library/react'
import { TodoList } from './TodoList'

test('The title is present', () => {
  render(<TodoList />)

  expect(screen.getByRole('heading', { name: 'Todos' })).toBeInTheDocument()
})
