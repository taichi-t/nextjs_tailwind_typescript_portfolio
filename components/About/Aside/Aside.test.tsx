import React from 'react';
import { render, screen } from '@testing-library/react';
import Aside from './Aside';

describe('<Aside/>', () => {
  test('render without crashing', () => {
    render(<Aside />);
    expect(screen.getByText('Vancouver, Canada')).toBeInTheDocument();
  });
});
