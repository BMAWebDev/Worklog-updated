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
  style?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  style,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) =>
        typeof children === 'function' ? (
          <Style.Form style={style}>{children(formikProps)}</Style.Form>
        ) : (
          <Style.Form style={style}>{children}</Style.Form> // Default JSX
        )
      }
    </Formik>
  );
};

export default Form;
