import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GrupoDeOpcoes, IGrupoOpcoes } from '../src/';

export default {
  title: 'Components/GrupoDeOpcoes',
  component: GrupoDeOpcoes,
} as ComponentMeta<typeof GrupoDeOpcoes>;

const Template: ComponentStory<typeof GrupoDeOpcoes> = args => (
  <GrupoDeOpcoes {...args} />
);

export const Default = Template.bind({});
Default.args = {
  opcoes: [
    { id: 1, titulo: 'E-book', corpo: 'R$ 00,00', rodape: '.pdf, .epub, .mob' },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
  ],
} as IGrupoOpcoes;
