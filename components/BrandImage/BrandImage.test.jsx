import { render } from '@testing-library/react';
import BrandImage from './BrandImage';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders BrandImage unchanged', () => {
    const { container } = render(<BrandImage />);

    expect(container).toMatchSnapshot();
  });
});
