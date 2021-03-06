
import React from 'react';
import { Form } from 'semantic-ui-react';

export default function FormInput({
  input,
  type,
  label,
  placeholder,
  as: As = Form.Input,
  meta,
  beforeInput,
  ...props
}) {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }

  return (
    <Form.Field error={!!(meta.error && meta.touched)}>
      {beforeInput}
      <As
        {...props}
        {...input}
        label={label}
        value={input.value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Form.Field>
  );
}
