import { RecipeCard } from './RecipeCard';

export default {
  title: 'Example/Recipe Card',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => RecipeCard(args);

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'RecipeCard',
  description: 'Nunc mattis nec diam eu vehicula. Sed eu sem lectus. Vestibulum pretium felis nibh, vitae hendrerit orci interdum et. Curabitur scelerisque fermentum eros. Nulla facilisi.',
  imgSrc: 'https://unsplash.com/photos/w6ftFbPCs9I/download?force=true&w=640',
  imgAlt: 'Alt'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'RecipeCard',
  description: 'Nunc mattis nec diam eu vehicula. Sed eu sem lectus. Vestibulum pretium felis nibh, vitae hendrerit orci interdum et. Curabitur scelerisque fermentum eros. Nulla facilisi.',
  imgSrc: 'https://unsplash.com/photos/w6ftFbPCs9I/download?force=true&w=640',
  imgAlt: 'Alt'
};
