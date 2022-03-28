import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe('Todo Footer', () => {
  it('should render correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  // other assertions
  // it('should render "task" when the number of incomplete tasks is 1', () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText(/1 task left/i);
  //   expect(paragraphElement).toContainHTML('p');
  // });

  // it('should render "task" when the number of incomplete tasks is 1', () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByTestId('para');
  //   expect(paragraphElement).toHaveTextContent('1 task left');
  // });

  // it('should render text content if "1 task left"', () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText(/1 task left/i);
  //   expect(paragraphElement.textContent).toBe('1 task left');
  // });
});
