import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Botao, IBotao } from '../src';

export default {
  title: 'Components/Botao',
  component: Botao,
} as ComponentMeta<typeof Botao>;

const Template: ComponentStory<typeof Botao> = args => <Botao {...args} />;

export const Primario = Template.bind({});
Primario.args = { texto: 'Botao Primario', tipo: 'primario' } as IBotao;

export const Secundario = Template.bind({});
Secundario.args = {
  texto: 'Botao Secundario',
  tipo: 'secundario',
} as IBotao;
