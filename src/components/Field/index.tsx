import { ErrorMessage } from 'formik';
// constants
import { Colors } from '@constants/config';
// components
import Flex from '@components/Flex';
import { Label, Text } from '@components/Text';
// style
import Style from './styled';

interface FieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

const Field: React.FC<FieldProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
}) => {
  return (
    <Flex direction="column" isFullWidth flex={1} gap={5}>
      <Label htmlFor={name}>{label}</Label>

      <Style.Field name={name} type={type} placeholder={placeholder} />

      <Text color={Colors.Red}>
        <ErrorMessage name={name} />
      </Text>
    </Flex>
  );
};

export default Field;
