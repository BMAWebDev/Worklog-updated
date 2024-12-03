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

const Register = () => {
  return (
    <Style.Register align="center" justify="center" alignContent="center">
      <Style.Container gap={50}>
        <Heading1 isFullWidth align="center">
          Login to worklog
        </Heading1>

        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Field
            label="Email:"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Field
            label="Password:"
            name="password"
            placeholder="Enter your password"
            type="password"
          />

          <Text>
            Don't have an account? Register {` `}
            <Link
              to={Routes.Register}
              style={{ color: Colors.Blue, textDecoration: 'underline' }}
            >
              here
            </Link>
            .
          </Text>

          <Text>
            Forgot your password? Click {` `}
            <Link
              to={Routes.ResetPassword}
              style={{ color: Colors.Blue, textDecoration: 'underline' }}
            >
              here
            </Link>
            .
          </Text>

          <PrimaryButton type="submit" radius="8px">
            Login
          </PrimaryButton>
        </Form>
      </Style.Container>
    </Style.Register>
  );
};

export default Register;
