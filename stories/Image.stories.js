import { Image } from './Image';

export default {
  title: 'Example/Image Card',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Image(args);

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://unsplash.com/photos/w6ftFbPCs9I/download?force=true&w=640',
  imgAlt: 'Random alt tag'
};


export const LargeImage = Template.bind({});
LargeImage.args = {
  imgSrc: 'https://images.unsplash.com/photo-1615125468484-088e3dfcabb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4000&q=80',
  imgAlt: 'Random alt tag'
};
