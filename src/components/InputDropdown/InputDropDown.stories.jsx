import { InputDropdown } from './index';

export default {
  title: 'Input Dropdown',
  component: InputDropdown,
};

const Template = (args) => <InputDropdown {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  title: 'Normal Input',
  date: false,
  dropdown: false,
};

export const Date = {
  args: {
    title: 'Custom Date',
    date: true,
    dropdown: false,
  },
};

export const Dropdown = {
  args: {
    title: 'Custom Dropdown',
    date: false,
    dropdown: true,
  },
};
