import styled from 'styled-components';

const Content = styled.div<{ isSidebarActive: boolean }>`
  width: ${({ isSidebarActive }) =>
    isSidebarActive ? '75vw' : 'calc(100vw - 51px)'};
  transition: width 0.5s ease-in-out;
  height: 100vh;
  padding: 50px;
  overflow-y: scroll;
`;

const Style = { Content };

export default Style;
