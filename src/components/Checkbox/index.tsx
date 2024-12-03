import { Field, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
// components
import { Label } from '@components/Text';
import CheckmarkIcon from '@assets/checkmark.svg';
import Flex from '@components/Flex';
// style
import Style from './styled';

interface CheckboxProps {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue(name, isChecked);
  }, [isChecked]);

  return (
    <Flex gap={10}>
      <Style.Checkbox
        isChecked={isChecked}
        onClick={() => setIsChecked((prev) => !prev)}
      >
        {isChecked && <img src={CheckmarkIcon} alt="checkmark icon" />}
      </Style.Checkbox>

      <Field name={name} type="checkbox" checked={isChecked} hidden />

      <Label htmlFor={name}>{label}</Label>
    </Flex>
  );
};

export default Checkbox;
