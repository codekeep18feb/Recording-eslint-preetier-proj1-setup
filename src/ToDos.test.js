import { render, screen, waitFor } from '@testing-library/react';
import ToDos from './components/ToDos';

// Mock fetch to simulate a successful response
test('renders a list of todos after successful fetch', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: 'Test Todo', completed: false }]),
  });
  global.fetch = mockFetch;

  render(<ToDos />);

  // Check if the loading message is shown first
  expect(screen.getByText(/Loading todos.../)).toBeInTheDocument();

  // Wait for the todos to load and check for the todo item
  await waitFor(() => screen.getByText('Test Todo'));

  // Verify that the todo appears in the document
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});
