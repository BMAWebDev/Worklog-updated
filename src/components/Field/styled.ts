import styled from 'styled-components';
import { Field as FormikField } from 'formik';
// constants
import config, { Colors } from '@constants/config';

const Field = styled(FormikField)`
  width: 100%;
  border: 1px solid ${Colors.LightGrey};
  font-family: ${config.text.family};
  font-size: ${config.text.text.size}px;
  padding: 10px 15px;
  border-radius: 8px;

  &::placeholder {
    font-weight: 300;
    font-style: italic;
  }
`;

const Style = { Field };

export default Style;
