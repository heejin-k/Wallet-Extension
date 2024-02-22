import { TextareaHTMLAttributes } from 'react';
import {
  InputWrap,
  InputTitle,
  ErrorMessegg,
  TextAreaField,
} from './InputStyle';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputTitle?: string;
  inputState?: 'correct' | 'error' | '';
  errorMsg?: string;
  unit?: string;
  disabled?: boolean;
}

function TextArea({
  inputTitle,
  value,
  id,
  className = 'Input',
  inputState = '',
  errorMsg = '',
  unit = '',
  disabled = false,
  ...restProps
}: TextAreaProps): JSX.Element {
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