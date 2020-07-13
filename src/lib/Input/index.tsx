import React, {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  HTMLProps,
} from 'react';

import { getUnknownObjectValue } from '../Form/utils';
import FormContext from '../Form/Context';

interface Props {
  name: string;
  value?: string;
  type: string;
  ref?(): Function;
  onChange?(e: FormEvent<HTMLInputElement>): void;
}

const Input = ({
  name,
  value,
  type,
  ref,
  ...props
}: Props & HTMLProps<HTMLInputElement>): ReactElement => {
  const { fields, handleChange, setFields } = useContext(FormContext);
  const inputValue = getUnknownObjectValue(fields, name);

  useEffect(() => {
    setFields((state: object) => ({
      ...state,
      [name]: value,
    }));
  }, [name, value, setFields]);

  function handleInputChange(e: FormEvent<HTMLInputElement>): void {
    e.preventDefault();
    handleChange(e, name);
  }

  return (
    <input
      {...props}
      name={name}
      value={inputValue}
      type={type}
      ref={ref}
      onChange={handleInputChange}
    />
  );
};

export default Input;
