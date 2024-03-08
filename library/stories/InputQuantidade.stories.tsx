import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputQuantidade, IInputQuantidade } from '../src/';

export default {
  title: 'Components/InputQuantidade',
  component: InputQuantidade,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof InputQuantidade>;

const Template: ComponentStory<typeof InputQuantidade> = args => (
  <InputQuantidade {...args} />
);

export const InputQuantidadeComponent = Template.bind({});
InputQuantidadeComponent.args = {
  label: 'Uma label interessante',
} as IInputQuantidade;
