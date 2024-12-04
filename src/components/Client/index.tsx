// constants
import { Colors } from '@constants/config';
// components
import { Heading3, Text } from '@components/Text';
import { PrimaryButton, RemoveButton } from '@components/Button';
import Flex from '@components/Flex';
// style
import Style from './styled';

interface ClientProps {
  title: string;
  roles: string[];
}

const Client: React.FC<ClientProps> = ({ title, roles }) => {
  return (
    <Style.Client align="stretch" isFullWidth>
      <Style.Thumbnail />

      <Style.TextContainer
        direction="column"
        isFullWidth
        flex={1}
        justify="space-between"
        gap={15}
      >
        <Flex direction="column">
          <Heading3>{title}</Heading3>
          <Text color={Colors.LightGrey}>{roles.join(', ')}</Text>
        </Flex>

        <Text isFullWidth align="center">
          175h total
        </Text>

        <Flex isFullWidth justify="space-between">
          <Text>150h facturate</Text>
          <Text>25h nefacturate</Text>
          <Text>130h platit</Text>
          <Text>45h neplatit</Text>
        </Flex>

        <Style.ButtonsContainer isFullWidth gap={10}>
          <PrimaryButton flex={0.5}>View client info</PrimaryButton>
          <RemoveButton flex={0.5}>Remove client</RemoveButton>
        </Style.ButtonsContainer>
      </Style.TextContainer>
    </Style.Client>
  );
};

export default Client;
