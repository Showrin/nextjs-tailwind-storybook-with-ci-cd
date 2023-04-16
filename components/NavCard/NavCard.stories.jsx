import NavCard from './NavCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/NavCard',
  component: NavCard,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicNavCard = {
  args: {
    title: 'Hi There',
    description: "I'm Showrin. A self taught engineer. Working on building things for web.",
    href: 'https://www.showrin.com/',
  },
};
