import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tags, ITags } from '../src';

export default {
  title: 'Components/Tags',
  component: Tags,
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = args => <Tags {...args} />;

export const Primario = Template.bind({});
Primario.args = {
  texto: 'Tag',
} as ITags;
