import React, { ReactElement, ReactNode, HTMLProps } from 'react';

interface Props {
  children?: ReactNode;
  value: string;
}

const Option = ({
  children,
  value,
  ...props
}: Props & HTMLProps<HTMLOptionElement>): ReactElement => {
  return (
    <option {...props} value={value}>
      {children}
    </option>
  );
};

export default Option;
