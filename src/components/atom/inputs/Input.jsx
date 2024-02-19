import React from 'react';
import {
  InputWrap,
  InputTitle,
  InputField,
  Unit,
  Disabled,
  ErrorMessegg,
} from './InputStyle';

export function Input({
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
  const isUnknown = inputState === 'unknown';

  return (
    <InputWrap>
      <InputTitle htmlFor={id}>{inputTitle}</InputTitle>
      <InputField
        id={id}
        className={`${className} ${disabled ? 'disabled' : ''} ${
          isCorrect
            ? 'correctInput'
            : isError
            ? 'errorInput'
            : isUnknown
            ? 'unknownInput'
            : ''
        }`}
        value={value}
        {...restProps}
        autoComplete="new-password"
      />
      {/* <div>
        {unit !== '' && (
          <Unit className={`${disabled ? 'disabled' : ''}`}>{unit}</Unit>
        )}
      </div> */}
      {inputState !== '' && (
        <ErrorMessegg className={inputState}>{errorMsg}</ErrorMessegg>
      )}
    </InputWrap>
  );
}

export default Input;
