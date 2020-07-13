import React, {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  HTMLProps,
} from 'react';
import FormContext from '../Form/Context';

interface Props {
  name: string;
  value?: string;
  ref?(): Function;
}

const Textarea = ({
  name,
  value,
  ref,
  ...props
}: Props & HTMLProps<HTMLTextAreaElement>): ReactElement => {
  const { handleChange, setFields } = useContext(FormContext);

  useEffect(() => {
    setFields((state: object) => ({
      ...state,
      [name]: value,
    }));
  }, [name, value, setFields]);

  return (
    <textarea
      {...props}
      name={name}
      ref={ref}
      onChange={(e: FormEvent<HTMLTextAreaElement>): void =>
        handleChange(e, name)
      }
      defaultValue={value}
    />
  );
};

export default Textarea;
