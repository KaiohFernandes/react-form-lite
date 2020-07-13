import { createContext, FormEvent } from 'react';

interface FormContext {
  fields: unknown;
  setFields: (data: unknown) => void;
  handleChange: (
    e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    name: string
  ) => void;
}

export default createContext<FormContext>({} as FormContext);
