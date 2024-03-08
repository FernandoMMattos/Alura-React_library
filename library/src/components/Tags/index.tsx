import React from 'react';
import styled from 'styled-components';

export interface ITags {
  texto: string;
}

const TagsStyled = styled.div`
  padding: 24px 32px;
  color: #fff;
  background: #eb9b00;
  font-weight: 700;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
`;

export const Tags = ({ texto }: ITags) => {
  return <TagsStyled>{texto}</TagsStyled>;
};
