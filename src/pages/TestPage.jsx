import { Button, Input } from 'components/atom';
import InputPassword from 'components/atom/inputs/InputPassword';
import TextArea from 'components/atom/inputs/TextArea';
import React from 'react';

let inputState = '';
export function TestPage() {
  return (
    <>
      <Button type={'submit'} size={''} text={'Create Account'} />
      <Button
        type={'submit'}
        size={''}
        className={'point'}
        text={'Import Account'}
      />
      <Button type={'submit'} size={''} active={false} text={'Create'} />
      <Input
        inputTitle={'Password'}
        id={'password'}
        type={'password'}
        placeholder={'placeholder'}
        inputState={inputState}
      />
      <Input
        id={'password2'}
        type={'password'}
        placeholder={'placeholder'}
        errorMsg={'error'}
        inputState={'correct'}
      />
      <Input
        id={'password3'}
        type={'password'}
        placeholder={'placeholder'}
        errorMsg={'error'}
        inputState={'error'}
      />
      <InputPassword
        inputTitle={'InputPassword Error'}
        id={'password5'}
        placeholder={'placeholder InputPassword'}
        errorMsg={'error'}
        inputState={'error'}
      />
      <InputPassword
        inputTitle={'InputPassword'}
        id={'password6'}
        placeholder={'placeholder InputPassword'}
      />
      <TextArea
        inputTitle={'TextArea'}
        id={'password4'}
        type={'password'}
        placeholder={'placeholder'}
        className={inputState + 'Input'}
      />
    </>
  );
}
export default TestPage;
