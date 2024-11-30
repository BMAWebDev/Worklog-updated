import { PropsWithChildren } from "react";
// style
import Style from "./styled";

const Content: React.FC<PropsWithChildren> = ({ children }) => (
  <Style.Content>{children}</Style.Content>
);

export default Content;
