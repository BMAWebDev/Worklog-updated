import { PropsWithChildren } from "react";
// components
import Sidebar from "./Sidebar";
import Content from "./Content";
import Flex from "@components/Flex";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex>
      <Sidebar />

      <Content>{children}</Content>
    </Flex>
  );
};

export default Layout;
