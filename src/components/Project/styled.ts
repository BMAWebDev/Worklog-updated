import styled from "styled-components";
// constants
import { Colors } from "@constants/config";
// components
import Flex from "@components/Flex";

const Project = styled(Flex)`
  border: 1px solid ${Colors.LightGrey};
  border-radius: 15px;
  box-shadow: 0px 1px 9px 1px #b1acac;
  width: calc(33.33% - 17.5px);
`;

const Thumbnail = styled.div`
  width: 100%;
  min-height: 20vh;
  background: ${Colors.DarkGrey};
  border-radius: 15px 15px 0 0;
`;

const TextContainer = styled(Flex)`
  padding: 10px;
`;

const Style = { Project, Thumbnail, TextContainer };

export default Style;
