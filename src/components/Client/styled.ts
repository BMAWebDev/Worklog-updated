import styled from 'styled-components';
// constants
import { Colors } from '@constants/config';
// components
import Flex from '@components/Flex';

const Client = styled(Flex)`
  border: 1px solid ${Colors.LightGrey};
  border-radius: 15px;
  box-shadow: 0px 1px 9px 1px #b1acac;
  flex: auto;
`;

const Thumbnail = styled.div`
  width: 35%;
  min-height: 20vh;
  height: 100%;
  background: ${Colors.DarkGrey};
  border-radius: 15px 0 0 15px;
`;

const TextContainer = styled(Flex)`
  padding: 10px;
`;

const ButtonsContainer = styled(Flex)``;

const Style = { Client, Thumbnail, TextContainer, ButtonsContainer };

export default Style;
