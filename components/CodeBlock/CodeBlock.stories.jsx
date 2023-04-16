import CodeBlock from './CodeBlock';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicCodeBlock = {
  args: {
    children: "I'm the only child of this code block",
  },
};
