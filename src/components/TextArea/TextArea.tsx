import React, { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import { InputText, InputTextProps } from '../';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputTextProps;

export const TextArea = (props: TextAreaProps) => (
  <TextAreaBase tag="textarea" {...props} />
);

const TextAreaBase = styled(InputText)``;
