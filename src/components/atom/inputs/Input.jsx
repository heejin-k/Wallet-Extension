import React, { useState } from 'react';
import {
  InputWrap,
  InputTitle,
  InputField,
  ErrorMessegg,
  VisibleButton,
} from './InputStyle';

export function Input({
  inputTitle,
  value,
  id,
  className = 'Input',
  inputState = '',
  errorMsg = '',
  unit = '',
  isVisible = false,
  disabled = false,
  type,
  ...restProps
}) {
  const [inputType, setInputType] = useState(type);
  const isCorrect = inputState === 'correct';
  const isError = inputState === 'error';
  let visible = inputType === 'password' ? 'EyeVisibleOff' : 'EyeVisible';

  function setVisible() {
    const newType = inputType === 'password' ? 'text' : 'password';
    setInputType(newType);
  }
  return (
    <InputWrap>
      {inputTitle && <InputTitle htmlFor={id}>{inputTitle}</InputTitle>}
      <InputField
        type={inputType}
        id={id}
        className={`${className} ${disabled ? 'disabled' : ''} ${
          isCorrect ? 'correctInput' : isError ? 'errorInput' : ''
        }`}
        value={value}
        {...restProps}
      />
      {isVisible && (
        <VisibleButton className={visible} onClick={setVisible}></VisibleButton>
      )}
      {inputState !== '' && (
        <ErrorMessegg className={inputState}>{errorMsg}</ErrorMessegg>
      )}
    </InputWrap>
  );
}

export default Input;
