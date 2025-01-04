import { render, screen, waitFor } from '@testing-library/react';
import ToDos from './components/ToDos';

// Mock fetch to simulate a successful response
test('renders a list of todos after successful fetch', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: 'Test Todo', completed: false }]),
  });
  global.fetch = mockFetch;



  const logSpy = jest.spyOn(console, 'log');
// console.log('Hello World');

 
  render(<ToDos />);
  // expect(logSpy).toHaveBeenCalledWith('Hello World1!');

  // expect(logSpy).toHaveBeenCalledWith('Hello World!');


  // await waitFor(() => expect(logSpy).toHaveBeenCalledWith('Hello World!')); // First log
  // await waitFor(() => expect(logSpy).toHaveBeenCalledWith('Hello World1!')); // Second log


  expect(logSpy).toHaveBeenCalledWith('Hello World!')
  expect(logSpy).toHaveBeenCalledWith('Hello World1!')

  console.log("SDFSDFSDFSDF",logSpy.mock.calls)

  // Check the order of the console logs
  expect(logSpy.mock.calls[0][0]).toBe('Hello World!');
  expect(logSpy.mock.calls[1][0]).toBe('Hello World1!');



  // Check if the loading message is shown first
  expect(screen.getByText(/Loading todos.../)).toBeInTheDocument();

  // Wait for the todos to load and check for the todo item
  await waitFor(() => screen.getByText('Test Todo'));

  // Verify that the todo appears in the document
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});
