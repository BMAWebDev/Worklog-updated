import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
// constants
import { Colors } from '@constants/config';

const Form = styled(FormikForm)<{ style?: React.CSSProperties }>`
  border: 1px solid ${Colors.LightGrey};
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0px 1px 15px -5px #b1acac;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;

  ${({ style }) => ({ ...style })};
`;

const Style = { Form };

export default Style;
