import { render, screen } from '@testing-library/react';
import CodeBlock from './CodeBlock';
import '@testing-library/jest-dom';

describe('CodeBlock', () => {
  const children = 'This is the child';

  it('renders a codeblock with provided children', () => {
    render(<CodeBlock>{children}</CodeBlock>);

    const element = screen.getByText(children);

    expect(element).toBeInTheDocument();
  });
});
