import styled from 'styled-components';
// constants
import { Colors } from '@constants/config';
// components
import Flex from '@components/Flex';
import { Heading2 } from '@components/Text';

const Sidebar = styled(Flex)<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? '25vw' : 'fit-content')};
  height: 100vh;
  padding: ${({ isActive }) => (isActive ? '50px 25px' : '50px 10px')};
  transition: width 0.5s ease-in-out, padding 0.5s ease-in-out;
  position: relative;
  border-right: 1px solid ${Colors.LightGrey};
`;

const ToggleArrow = styled.img<{ isActive: boolean }>`
  position: absolute;
  top: 55px;
  right: -20px;
  cursor: pointer;

  transform: rotate(${({ isActive }) => (isActive ? 0 : -180)}deg);
  transition: transform 0.5s ease-in-out;
`;

const ProfilePic = styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? 75 : 30)}px;
  height: ${({ isActive }) => (isActive ? 75 : 30)}px;
  background: ${Colors.DarkGrey};
  border-radius: ${({ isActive }) => (isActive ? 15 : 5)}px;
`;

const PageIcon = styled.img<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? 30 : 30)}px;
  height: ${({ isActive }) => (isActive ? 30 : 30)}px;
`;

const PageTitle = styled(Heading2)<{ isActive: boolean }>`
  // opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  transition: opacity 0.25s ease-in-out;
`;

const ProfileTextContainer = styled(Flex)<{ isActive: boolean }>`
  // opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  transition: opacity 0.25s ease-in-out;
`;

const Style = {
  Sidebar,
  ToggleArrow,
  ProfilePic,
  PageIcon,
  PageTitle,
  ProfileTextContainer,
};

export default Style;
