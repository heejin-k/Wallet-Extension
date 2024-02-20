import React from 'react';
import { Input } from '..';

export function InputPassword({
  placeholder,
  inputState,
  errorMsg,
  value,
  inputTitle,
  id,
}) {
  return (
    <>
      <Input
        value={value}
        id={id}
        type={'password'}
        placeholder={placeholder}
        errorMsg={errorMsg}
        className={inputState + 'Input'}
        inputState={inputState}
        autoComplete="new-password"
        isVisible={true}
        inputTitle={inputTitle}
      />
    </>
  );
}

export default InputPassword;
