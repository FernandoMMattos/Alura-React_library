import React from 'react';
import styled from 'styled-components';

export interface ICampoTexto {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

const LabelStyled = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 16px;
  margin-bottom: 8px;
`;

const InputStyled = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const CampoTexto = ({
  label,
  value,
  onChange,
  type = 'text',
}: ICampoTexto) => {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
