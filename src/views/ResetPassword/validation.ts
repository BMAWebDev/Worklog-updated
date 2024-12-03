import * as yup from 'yup';
// constants
import { EMAIL_MUST_BE_VALID, FIELD_REQUIRED } from '@constants/form';
// models
import { InitialValues } from './models';

export const initialValues: InitialValues = {
  email: '',
};

export const validationSchema = yup.object({
  email: yup.string().email(EMAIL_MUST_BE_VALID).required(FIELD_REQUIRED),
});
