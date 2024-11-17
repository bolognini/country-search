import Home from './index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
