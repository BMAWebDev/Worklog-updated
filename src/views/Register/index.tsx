// constants
import { initialValues, validationSchema } from './validation';
// components
import { Heading1 } from '@components/Text';
import Form from '@components/Form';
import Field from '@components/Field';
import { PrimaryButton } from '@components/Button';
import Flex from '@components/Flex';
import Checkbox from '@components/Checkbox';
// style
import Style from './styled';

const Register = () => {
  return (
    <Style.Register align="center" justify="center" alignContent="center">
      <Style.Container gap={50}>
        <Heading1 isFullWidth align="center">
          Register to worklog
        </Heading1>

        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <>
              {values.isCompany ? (
                <Field
                  label="Company name:"
                  name="companyName"
                  placeholder="Enter your company's name"
                />
              ) : (
                <Flex gap={10}>
                  <Field
                    label="First name:"
                    placeholder="Enter your first name"
                    name="firstName"
                  />

                  <Field
                    label="Last name:"
                    placeholder="Enter your last name"
                    name="lastName"
                  />
                </Flex>
              )}

              <Checkbox label="Register as company" name="isCompany" />

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

              <Field
                label="Confirm password:"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
              />

              <PrimaryButton type="submit" radius="8px">
                Register
              </PrimaryButton>
            </>
          )}
        </Form>
      </Style.Container>
    </Style.Register>
  );
};

export default Register;
