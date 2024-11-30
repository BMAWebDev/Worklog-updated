import styled from "styled-components";
// models
import { FlexProps } from "@models/layout";

export default styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap && `${gap}px`};
  align-items: ${({ align }) => align || "flex-start"};
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf};
  width: ${({ isFullWidth }) => isFullWidth && "100%"};
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
`;
