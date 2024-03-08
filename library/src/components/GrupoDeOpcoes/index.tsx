import React, { useState } from 'react';
import styled from 'styled-components';

export interface IGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface IGrupoOpcoes {
  opcoes: IGrupoOpcao[];
  valorPadrao?: IGrupoOpcao | null;
  onChange?: (opcao: IGrupoOpcao) => void;
}

const SectionStyled = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  border: 1px solid;
  border-color: ${props => (props.selecionado ? '#002f52' : '#eb9b00')};
  border-radius: 8px;
  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)'
      : '#fff'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${props => (props.selecionado ? '#fff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${props => (props.selecionado ? '#fff' : '#eb9b00')};
    font-weight: 700;
    font-size: 16px;
  }

  footer {
    color: ${props => (props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0.54)')};
    font-size: 12px;
    font-weight: 400;
  }
`;

export const GrupoDeOpcoes = ({
  opcoes,
  onChange,
  valorPadrao,
}: IGrupoOpcoes) => {
  const [selecao, setSelecao] = useState<IGrupoOpcao | null>(
    valorPadrao ?? null
  );
  const aoSelecionar = (opcao: IGrupoOpcao): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };
  return (
    <>
      {opcoes.map(opcao => (
        <SectionStyled
          key={opcao.id}
          onClick={() => aoSelecionar(opcao)}
          selecionado={selecao?.id == opcao.id}
        >
          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </SectionStyled>
      ))}
    </>
  );
};
