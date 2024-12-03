import * as yup from 'yup';
// constants
import {
  COMPANY_NAME_MIN_CHARS,
  COMPANY_NAME_MIN_CHARS_TEXT,
  EMAIL_MUST_BE_VALID,
  FIELD_REQUIRED,
  NAME_MIN_CHARS,
  NAME_MIN_CHARS_TEXT,
  PASSWORD_MIN_CHARS,
  PASSWORD_MIN_CHARS_TEXT,
} from '@constants/form';
// models
import { InitialValues } from './models';

export const initialValues: InitialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  confirmPassword: '',
  isCompany: false,
};

export const validationSchema = yup.object({
  firstName: yup.string().when('isCompany', {
    is: false,
    then: (schema) =>
      schema.min(NAME_MIN_CHARS, NAME_MIN_CHARS_TEXT).required(FIELD_REQUIRED),
  }),
  lastName: yup.string().when('isCompany', {
    is: false,
    then: (schema) =>
      schema.min(NAME_MIN_CHARS, NAME_MIN_CHARS_TEXT).required(FIELD_REQUIRED),
  }),
  companyName: yup.string().when('isCompany', {
    is: true,
    then: (schema) =>
      schema
        .min(COMPANY_NAME_MIN_CHARS, COMPANY_NAME_MIN_CHARS_TEXT)
        .required(FIELD_REQUIRED),
  }),
  isCompany: yup.boolean(),
  email: yup.string().email(EMAIL_MUST_BE_VALID).required(FIELD_REQUIRED),
  password: yup
    .string()
    .min(PASSWORD_MIN_CHARS, PASSWORD_MIN_CHARS_TEXT)
    .required(FIELD_REQUIRED),
  confirmPassword: yup
    .string()
    .min(PASSWORD_MIN_CHARS, PASSWORD_MIN_CHARS_TEXT)
    .required(FIELD_REQUIRED)
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
