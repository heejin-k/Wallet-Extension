import { useState } from 'react';
import {
  InputWrap,
  InputTitle,
  InputField,
  ErrorMessegg,
  VisibleButton,
} from './InputStyle';

interface InputProps {
  inputTitle?: string;
  value: string | number;
  id: string;
  autoComplete? : string;
  placeholder?: string;
  className?: string;
  inputState?: 'correct' | 'error' | '';
  errorMsg?: string;
  unit?: string;
  isVisible?: boolean;
  disabled?: boolean;
  type: 'text' | 'password';
}

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
}:InputProps): JSX.Element {
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
