import { render, screen } from '@testing-library/react'
import { TodoList } from './TodoList'

test('The title is present', () => {
  render(<TodoList />)

  expect(screen.getByRole('heading', { name: 'Todos' })).toBeInTheDocument()
})

test('All the items are present', () => {
  render(
    <TodoList
      itemsTestId='todoListItem'
      todos={[
        { id: '1', description: 'make a cup of coffee', completed: true },
        { id: '2', description: 'run 5 kilometers', completed: false },
      ]}
    />,
  )

  expect(screen.getAllByTestId('todoListItem').length).toEqual(2)
  expect(screen.getByText('make a cup of coffee')).toBeInTheDocument()
  expect(screen.getByText('run 5 kilometers')).toBeInTheDocument()
})
