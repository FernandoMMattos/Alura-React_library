import React from 'react';
import styled, { css } from 'styled-components';

export interface IBotao {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<IBotao>`
  background: ${(props: IBotao) =>
    props.tipo === 'primario' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: IBotao) =>
    props.tipo === 'primario' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: IBotao) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const Botao = ({ texto, onClick, tipo = 'primario' }: IBotao) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
