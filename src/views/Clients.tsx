// components
import Flex from '@components/Flex';
import AddIcon from '@assets/add-icon.svg';
import { Heading1 } from '@components/Text';
import Client from '@components/Client';

const clients: any[] = [{}, {}, {}, {}, {}, {}];

const Clients = () => (
  <Flex direction="column" gap={50}>
    <Flex justify="space-between" align="center" isFullWidth>
      <Heading1>Clients</Heading1>

      <img src={AddIcon} alt="add icon" style={{ cursor: 'pointer' }} />
    </Flex>

    <Flex gap={25} isFullWidth direction="column">
      {clients.map((_, index) => (
        <Client
          key={index}
          title={`Client #${index + 1}`}
          roles={['Client', 'Contractor']}
        />
      ))}
    </Flex>
  </Flex>
);

export default Clients;
