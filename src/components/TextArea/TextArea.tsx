import React from 'react';
import styled from 'styled-components';
import { InputText, InputTextProps } from '../';

type TextAreaProps = InputTextProps;

export const TextArea = (props: TextAreaProps) => (
  <TextAreaBase tag="textarea" {...props} />
);

const TextAreaBase = styled(InputText)``;
