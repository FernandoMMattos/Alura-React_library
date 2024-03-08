import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CampoTexto, ICampoTexto } from '../src';

export default {
  title: 'Components/CampoTexto',
  component: CampoTexto,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof CampoTexto>;

const Template: ComponentStory<typeof CampoTexto> = args => (
  <CampoTexto {...args} />
);

export const CampoTextoComponent = Template.bind({});
CampoTextoComponent.args = { label: 'uma label interessante' } as ICampoTexto;
