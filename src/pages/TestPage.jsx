import { Button, Input } from 'components/atom';
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
        id={'password'}
        type={'password'}
        placeholder={'placeholder'}
        className={inputState + 'Input'}
        inputState={inputState}
      />
      <Input
        id={'password2'}
        type={'password'}
        placeholder={'placeholder'}
        errorMsg={'error'}
        className={inputState + 'Input'}
        inputState={'correct'}
      />
      <Input
        id={'password3'}
        type={'password'}
        placeholder={'placeholder'}
        errorMsg={'error'}
        className={inputState + 'Input'}
        inputState={'error'}
      />
    </>
  );
}
export default TestPage;
