import styled from 'styled-components';
// constants
import { Colors } from '@constants/config';

const Checkbox = styled.div<{ isChecked?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ isChecked }) => (isChecked ? Colors.Blue : Colors.White)};
  border: 1px solid
    ${({ isChecked }) => (isChecked ? Colors.Blue : Colors.LightGrey)};
  position: relative;

  img {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 13px;
    height: 13px;
  }
`;

const Style = { Checkbox };

export default Style;
