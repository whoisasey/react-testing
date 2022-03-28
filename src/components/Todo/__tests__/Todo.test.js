import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe('Todo', () => {
  it('should render todo list after input and button event', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: 'Grocery Shopping' } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/Grocery Shopping/i);

    expect(divElement).toBeInTheDocument();
  });
});
