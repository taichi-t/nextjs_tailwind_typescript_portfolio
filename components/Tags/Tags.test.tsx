import React from 'react';
import { render } from '@testing-library/react';
import Tags from './Tags';

describe('<Tags/>', () => {
  it('should have the class of "mr-1" exept last of the array', () => {
    const tags = [1, 2, 3, 4];
    const { container } = render(<Tags tags={tags} />);
    expect(container.lastElementChild).not.toHaveClass('mr-1');
  });
});
