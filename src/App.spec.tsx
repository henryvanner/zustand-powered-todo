import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('New todos can be added', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))

  expect(screen.getByLabelText('New Todo')).toHaveValue('')
  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).toBeInTheDocument()
})

test('Todos can be marked as completed', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )

  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).toBeChecked()
})

test('Todos can be marked as pending', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )

  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).not.toBeChecked()
})

test('Todos can be removed', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.type(screen.getByLabelText('New Todo'), 'run 5 kilometers')
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )
  await userEvent.click(
    screen.getByRole('button', { name: 'Remove make a cup of coffee todo' }),
  )

  expect(
    screen.queryByRole('checkbox', { name: 'make a cup of coffee' }),
  ).not.toBeInTheDocument()
  expect(
    screen.getByRole('checkbox', { name: 'run 5 kilometers' }),
  ).toBeInTheDocument()
})

test('Visibility can be set to show all todos', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.type(screen.getByLabelText('New Todo'), 'run 5 kilometers')
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )

  expect(screen.getByRole('radio', { name: 'Show All Todos' })).toBeChecked()
  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('checkbox', { name: 'run 5 kilometers' }),
  ).toBeInTheDocument()
})

test('Visibility can be set to show completed todos only', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.type(screen.getByLabelText('New Todo'), 'run 5 kilometers')
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )
  await userEvent.click(screen.getByRole('radio', { name: 'Completed only' }))

  expect(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  ).toBeInTheDocument()
  expect(
    screen.queryByRole('checkbox', { name: 'run 5 kilometers' }),
  ).not.toBeInTheDocument()
})

test('Visibility can be set to show pending todos only', async () => {
  render(<App />)

  await userEvent.type(
    screen.getByLabelText('New Todo'),
    'make a cup of coffee',
  )
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.type(screen.getByLabelText('New Todo'), 'run 5 kilometers')
  await userEvent.click(screen.getByRole('button', { name: 'Add' }))
  await userEvent.click(
    screen.getByRole('checkbox', { name: 'make a cup of coffee' }),
  )
  await userEvent.click(screen.getByRole('radio', { name: 'Pending only' }))

  expect(
    screen.queryByRole('checkbox', { name: 'make a cup of coffee' }),
  ).not.toBeInTheDocument()
  expect(
    screen.getByRole('checkbox', { name: 'run 5 kilometers' }),
  ).toBeInTheDocument()
})
