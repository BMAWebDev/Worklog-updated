import * as yup from 'yup';
// constants
import {
  EMAIL_MUST_BE_VALID,
  FIELD_REQUIRED,
  PASSWORD_MIN_CHARS,
  PASSWORD_MIN_CHARS_TEXT,
} from '@constants/form';
// models
import { InitialValues } from './models';

export const initialValues: InitialValues = {
  email: '',
  password: '',
};

export const validationSchema = yup.object({
  email: yup.string().email(EMAIL_MUST_BE_VALID).required(FIELD_REQUIRED),
  password: yup
    .string()
    .min(PASSWORD_MIN_CHARS, PASSWORD_MIN_CHARS_TEXT)
    .required(FIELD_REQUIRED),
});
