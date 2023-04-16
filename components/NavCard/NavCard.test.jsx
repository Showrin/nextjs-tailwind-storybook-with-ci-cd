import { render, screen } from '@testing-library/react';
import NavCard from './NavCard';
import '@testing-library/jest-dom';

describe('NavCard', () => {
  const props = {
    title: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app',
  };

  it('renders a NavCard', () => {
    render(<NavCard {...props} />);

    const linkElement = screen.getByRole("link");
    const titleText = screen.getByText(props.title);
    const descriptionText = screen.getByText(props.description);

    expect(linkElement).toHaveAttribute('href', props.href);
    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
  });
});
