import React, {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  ReactNode,
  HTMLProps,
} from 'react';
import FormContext from '../Form/Context';

interface Props {
  name: string;
  value?: string;
  children?: ReactNode;
  ref?(): Function;
}

const Select = ({
  name,
  ref,
  value,
  children,
  ...props
}: Props & HTMLProps<HTMLSelectElement>): ReactElement => {
  const { handleChange, setFields } = useContext(FormContext);

  useEffect(() => {
    setFields((state: object) => ({
      ...state,
      [name]: value,
    }));
  }, [name, value, setFields]);

  return (
    <select
      {...props}
      name={name}
      ref={ref}
      value={value}
      onChange={(e: FormEvent<HTMLSelectElement>): void =>
        handleChange(e, name)
      }
    >
      {children}
    </select>
  );
};

export default Select;
