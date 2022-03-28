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

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should render single todo list item after input and button event', () => {
    render(<MockTodo />);
    addTask(['Grocery Shopping']);

    const divElement = screen.getByText(/Grocery Shopping/i);

    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple todo list items after input and button event', () => {
    render(<MockTodo />);

    addTask(['Grocery Shopping', 'Wash Hands', 'Pet Cat']);
    const divElement = screen.getAllByTestId('task-container');

    expect(divElement.length).toBe(3);
  });

  it('should  have "todo-item-active" class when added to list', () => {
    render(<MockTodo />);

    addTask(['Grocery Shopping']);
    const divElement = screen.getByText(/Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });

  it('should not have "todo-item-active" class when initially rendered', () => {
    render(<MockTodo />);

    addTask(['Grocery Shopping']);
    const divElement = screen.getByText(/Grocery Shopping/i);

    expect(divElement).not.toHaveClass('todo-item-active');
  });
});
