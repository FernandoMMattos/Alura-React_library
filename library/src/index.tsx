import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from "./components/Botao"
export * from "./components/Card"
export * from "./components/Tags"
export * from "./components/GrupoDeOpcoes"
export * from "./components/CampoTexto"
export * from "./components/InputQuantidade"