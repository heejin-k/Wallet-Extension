import { Input } from '..';

interface InputPasswordProps {
  placeholder: string;
  inputState: 'correct' | 'error' | '';
  errorMsg?: string;
  value: string;
  inputTitle: string;
  id: string;
}

function InputPassword({
  placeholder,
  inputState,
  errorMsg,
  value,
  inputTitle,
  id,
  ...restProps
}: InputPasswordProps): JSX.Element {
  return (
    <>
      <Input
        value={value}
        id={id}
        type={'password'}
        placeholder={placeholder}
        errorMsg={errorMsg}
        className={`${inputState}Input`}
        inputState={inputState}
        autoComplete="new-password"
        isVisible={true}
        inputTitle={inputTitle}
        {...restProps}
      />
    </>
  );
}

export default InputPassword;