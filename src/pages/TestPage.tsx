import { Button, Input } from '../components/atom';
import InputPassword from '../components/atom/inputs/InputPassword';
import TextArea from '../components/atom/inputs/TextArea';
import IconButton from '../components/atom/buttons/IconButton';

let inputState = '';
export function TestPage() {
  return (
    <>
      <Button type={'submit'} text={'Create Account'} />
      <Button
        type={'submit'}
        className={'point'}
        text={'Import Account'}
      />
      <Button type={'submit'} active={false} text={'Create'} />
      <Input
        inputTitle={'Password'}
        id={'password'}
        type={'password'}
        placeholder={'placeholder'}
        inputState={''}
        value={''}
      />
      <Input
        id={'password2'}
        type={'password'}
        placeholder={'placeholder'}
        errorMsg={'error'}
        inputState={'correct'}
        value={''}
      />
      <Input
        id={'password3'}
        type={'password'}
        placeholder={'placeholder'}
        errorMsg={'error'}
        inputState={'error'}
        value={''}
      />
      <InputPassword
        inputTitle={'InputPassword Error'}
        id={'password5'}
        placeholder={'placeholder InputPassword'}
        errorMsg={'error'}
        inputState={'error'}
        value={''}
      />
      <InputPassword
        inputTitle={'InputPassword'}
        id={'password6'}
        placeholder={'placeholder InputPassword'}
        value={''}
        inputState={''}
      />
      <TextArea
        inputTitle={'TextArea'}
        id={'password4'}
        placeholder={'placeholder'}
        className={inputState + 'Input'}
      />
      <IconButton className="delete" onConfirm={()=>{}} />
      <IconButton className="copy" onConfirm={()=>{}} />
    </>
  );
}
export default TestPage;
