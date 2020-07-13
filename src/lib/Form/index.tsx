import React, {
  useState,
  FormEvent,
  ReactNode,
  ReactElement,
  HTMLProps,
  useLayoutEffect,
} from 'react';
import FormContext from './Context';
import { unknownToObject } from './utils';

interface Props {
  children: ReactNode;
  onSubmit(data: unknown): void;
  onChange?(data: object): void;
}

const Form = ({
  children,
  onSubmit,
  onChange,
  ...props
}: Props & HTMLProps<HTMLFormElement>): ReactElement => {
  const [fields, setFields] = useState<unknown>({});

  function handleChange(
    e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    name: string
  ): void {
    const { value } = e.currentTarget;

    setFields((state: object) => {
      const newFields = {
        ...state,
        [name]: value,
      };

      if (onChange) onChange(newFields);

      return newFields;
    });
  }

  useLayoutEffect(() => {
    const data = unknownToObject(fields);
    if (onChange) onChange(data);
  }, [fields, onChange]);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onSubmit(fields);
  }

  return (
    <FormContext.Provider value={{ fields, setFields, handleChange }}>
      <form
        {...props}
        onSubmit={(e: FormEvent<HTMLFormElement>): void => handleSubmit(e)}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
