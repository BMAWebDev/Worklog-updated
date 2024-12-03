import styled from 'styled-components';
// constants
import config, { Colors } from '@constants/config';
// models
import { TextProps } from '@models/text';

export const Text = styled.p<TextProps>`
  font-family: ${({ family }) => family || config.text.family};
  color: ${({ color }) => color || Colors.Black};
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  font-size: ${({ size }) =>
    size ? `${size}px` : `${config.text.text.size}px`};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'initial')};
  text-align: ${({ align }) => align || 'left'};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
  font-weight: ${({ weight }) => weight};
`;

export const Heading1 = styled.h1<TextProps>`
  font-family: ${({ family }) => family || config.text.family};
  color: ${({ color }) => color || Colors.Black};
  font-size: ${config.text.heading1.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  font-weight: ${({ weight }) => weight};
`;

export const Heading2 = styled.h2<TextProps>`
  font-family: ${({ family }) => family || config.text.family};
  color: ${({ color }) => color || Colors.Black};
  font-size: ${({ size }) =>
    size ? `${size}px` : `${config.text.heading2.size}px`};
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  font-weight: ${({ weight }) => weight};
`;

export const Heading3 = styled.h3<TextProps>`
  font-family: ${({ family }) => family || config.text.family};
  color: ${({ color }) => color || Colors.Black};
  font-size: ${config.text.heading3.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  font-weight: ${({ weight }) => weight};
`;

export const Label = styled.label<TextProps>`
  font-family: ${({ family }) => family || config.text.family};
  color: ${({ color }) => color || Colors.Black};
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  font-size: ${({ size }) =>
    size ? `${size}px` : `${config.text.text.size}px`};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'initial')};
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
  font-weight: ${({ weight }) => weight};
`;
