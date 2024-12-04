import Modal from 'react-modal';
// components
import Flex from '@components/Flex';
import AddIcon from '@assets/add-icon.svg';
import { Heading1, Heading2, Text } from '@components/Text';
import Client from '@components/Client';
import { useState } from 'react';
import Form from '@components/Form';
import Field from '@components/Field';
import { PrimaryButton } from '@components/Button';
import CloseIcon from '@assets/close-icon.svg';
import { initialValues, validationSchema } from './validation';

const clients: any[] = [{}, {}, {}, {}, {}, {}];

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '25px',
    borderRadius: '15px',
  } as React.CSSProperties,
};

const Clients = () => {
  const [isSent, setIsSent] = useState(false);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);

  const closeModal = () => setIsAddClientModalOpen(false);

  return (
    <>
      <Flex direction="column" gap={50}>
        <Flex justify="space-between" align="center" isFullWidth>
          <Heading1>Clients</Heading1>

          <img
            src={AddIcon}
            alt="add icon"
            onClick={() => setIsAddClientModalOpen(true)}
            style={{ cursor: 'pointer' }}
          />
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

      <Modal
        isOpen={isAddClientModalOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Add client"
        style={customStyles}
      >
        <Flex gap={25}>
          <Flex justify="space-between" isFullWidth align="center">
            <Heading2>Add client</Heading2>

            <img
              src={CloseIcon}
              width={20}
              onClick={() => closeModal()}
              style={{ cursor: 'pointer' }}
              alt="close icon"
            />
          </Flex>

          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              setIsSent(true);
            }}
            style={{ border: 0, boxShadow: 'none', padding: 0 }}
          >
            <Field
              label="Email:"
              name="email"
              placeholder="Enter your client's email"
              type="email"
            />

            {isSent && <Text>The invitation was successfully sent.</Text>}

            <PrimaryButton type="submit" radius="8px" disabled={isSent}>
              Add client
            </PrimaryButton>
          </Form>
        </Flex>
      </Modal>
    </>
  );
};

export default Clients;
