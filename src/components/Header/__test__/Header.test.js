import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  // get by Text
  it('should render same text passed into title prop - getByTexr', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  //get by role -  this will get all Roles of heading in the component
  // it('should render same text passed into title prop - getByRole', () => {
  //   render(<Header title="My Header" />);
  //   // specify the role and text
  //   const headingElement = screen.getByRole('heading', { name: 'My Header' });
  //   expect(headingElement).toBeInTheDocument();
  // });

  // // get by Title
  // it('should render same text passed into title prop - getByTitle', () => {
  //   render(<Header title="My Header" />);
  //   // specify the role and text
  //   const headingElement = screen.getByTitle('Header');
  //   expect(headingElement).toBeInTheDocument();
  // });

  // // get by Test ID
  // it('should render same text passed into title prop - getByTestId', () => {
  //   render(<Header title="My Header" />);
  //   // specify the role and text
  //   const headingElement = screen.getByTestId('header-1');
  //   expect(headingElement).toBeInTheDocument();
  // });

  // // findBy - this is asyncronous
  // it('should render same text passed into title prop - findByText', async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = await screen.findByText(/my header/i);
  //   expect(headingElement).toBeInTheDocument();
  // });

  // // queryBy
  // it('should render same text passed into title prop - queryByText', () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = screen.queryByText(/dogs/i);
  //   expect(headingElement).not.toBeInTheDocument();
  // });

  // // get all by role
  // it('should render same text passed into title prop - getAllByRole', () => {
  //   render(<Header title="My Header" />);
  //   const headingElements = screen.getAllByRole('heading');
  //   expect(headingElements.length).toBe(2);
  // });
});
