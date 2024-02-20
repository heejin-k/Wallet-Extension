import React from 'react';
import {
  InputWrap,
  InputTitle,
  ErrorMessegg,
  TextAreaField,
} from './InputStyle';

export function TextArea({
  inputTitle,
  value,
  id,
  className = 'Input',
  inputState = '',
  errorMsg = '',
  unit = '',
  disabled = false,
  ...restProps
}) {
  const isCorrect = inputState === 'correct';
  const isError = inputState === 'error';

  return (
    <InputWrap>
      {inputTitle && <InputTitle htmlFor={id}>{inputTitle}</InputTitle>}
      <TextAreaField
        id={id}
        className={`${className} ${disabled ? 'disabled' : ''} ${
          isCorrect ? 'correctInput' : isError ? 'errorInput' : ''
        }`}
        value={value}
        {...restProps}
      />
      {inputState !== '' && (
        <ErrorMessegg className={inputState}>{errorMsg}</ErrorMessegg>
      )}
    </InputWrap>
  );
}

export default TextArea;
