import { Link } from 'react-router';
// constants
import { initialValues, validationSchema } from './validation';
// components
import { Heading1, Text } from '@components/Text';
import Form from '@components/Form';
import Field from '@components/Field';
import { PrimaryButton } from '@components/Button';
// style
import Style from './styled';
import Routes from '@constants/routes';
import { Colors } from '@constants/config';
import { useState } from 'react';

const ResetPassword = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <Style.ResetPassword align="center" justify="center" alignContent="center">
      <Style.Container gap={50}>
        <Heading1 isFullWidth align="center">
          Reset password
        </Heading1>

        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            !isSent && setIsSent(true);
          }}
        >
          <Field
            label="Email:"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Text>
            Want to login? Click {` `}
            <Link
              to={Routes.Login}
              style={{ color: Colors.Blue, textDecoration: 'underline' }}
            >
              here
            </Link>
            .
          </Text>

          {isSent && (
            <Text>
              A message has been sent to the entered email address. If there is
              an account linked to the address, you will receive a reset
              password link.
            </Text>
          )}

          <PrimaryButton type="submit" radius="8px" disabled={isSent}>
            Reset password
          </PrimaryButton>
        </Form>
      </Style.Container>
    </Style.ResetPassword>
  );
};

export default ResetPassword;
