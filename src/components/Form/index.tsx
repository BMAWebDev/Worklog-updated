import { Formik, FormikProps } from 'formik';
import { Dictionary } from 'lodash';
import { AnyObjectSchema } from 'yup';
import { ReactNode } from 'react';
// style
import Style from './styled';

interface FormProps<T = Dictionary<any>> {
  initialValues: Dictionary<any>;
  validationSchema?: AnyObjectSchema;
  onSubmit: (values: T) => void;
  children?: ReactNode | ((formikProps: FormikProps<T>) => ReactNode); // Allow render prop
}

const Form: React.FC<FormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) =>
        typeof children === 'function' ? (
          <Style.Form>{children(formikProps)}</Style.Form>
        ) : (
          <Style.Form>{children}</Style.Form> // Default JSX
        )
      }
    </Formik>
  );
};

export default Form;
