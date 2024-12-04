import styled from 'styled-components';
// constants
import config, { Colors } from '@constants/config';
// models
import { ButtonProps } from '@models/button';

export const PrimaryButton = styled.button<ButtonProps>`
  background: ${({ disabled }) =>
    disabled ? Colors.DisabledBlue : Colors.Blue};
  color: ${Colors.White};
  border-radius: ${({ radius }) => radius || `${config.button.radius}px`};
  border: 0;
  padding: ${({ padding }) => padding || config.button.padding};
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: ${config.button.size}px;
  flex: ${({ flex }) => flex};
`;

export const RemoveButton = styled(PrimaryButton)<ButtonProps>`
  background: ${Colors.Red};
`;
