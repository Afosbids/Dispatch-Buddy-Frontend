import { Text } from './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography',
  component: Text,
  // argTypes: {
  //   btnType: {
  //     options: ['primary', 'secondary'],
  //     control: { type: 'radio' },
  //   },
  // },
};

const Template = (args) => <Text {...args} />;
// const TemplateHeading = (args) => <Text.Heading {...args} />;

export const TextDefault = Template.bind({});

TextDefault.args = {
  text: 'Some text',
  children: 'text within wrapper',
  color: 'secondary-80',
};

export const HeadingLevel4 = {
  args: {
    text: 'Level 4 Heading',
    level: 4,
  },
};
