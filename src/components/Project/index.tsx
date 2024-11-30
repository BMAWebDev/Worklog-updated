// constants
import { Colors } from "@constants/config";
// components
// import Flex from "@components/Flex";
import { Heading3, Text } from "@components/Text";
import { PrimaryButton } from "@components/Button";
// style
import Style from "./styled";

interface ProjectProps {
  title: string;
  roles: string[];
}

const Project: React.FC<ProjectProps> = ({ title, roles }) => {
  return (
    <Style.Project isFullWidth direction="column">
      <Style.Thumbnail />

      <Style.TextContainer direction="column">
        <Heading3>{title}</Heading3>
        <Text color={Colors.LightGrey}>{roles.join(", ")}</Text>
      </Style.TextContainer>

      <PrimaryButton radius="0 0 15px 15px">Log work</PrimaryButton>
    </Style.Project>
  );
};

export default Project;
