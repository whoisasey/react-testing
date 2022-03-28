import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  // trigger typing event
  it('should be able to type into input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);
    fireEvent.change(inputElement, { target: { value: 'Grocery Shopping' } });
    expect(inputElement.value).toBe('Grocery Shopping');
  });

  it('should have empty input when Add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);
    const buttonElement = screen.getByRole('button');
    fireEvent.change(inputElement, {
      target: { value: 'Grocery Shopping' },
    });

    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
