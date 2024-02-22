import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { trash, paper } from '../../../assets';

interface IconButtonProps {
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  className: 'delete' | 'copy';
}

function IconButton({ onConfirm, className }:IconButtonProps):JSX.Element {
  let iconSrc;

  if (className === 'delete') {
    iconSrc = trash;
  } else if (className === 'copy') {
    iconSrc = paper;
  } else {
  }
  return (
    <Button onClick={onConfirm} className={className}>
      <img src={iconSrc} alt="delete"></img>
      <p>{className === 'delete' ? 'Delete Account' : 'Copy to clipboard'}</p>
    </Button>
  );
}

export default IconButton;

const Button = styled.button`
  display: flex;
  padding: 12px 20px;
  flex-direction: row;
  gap: 8px;
  border-radius: 8px;
  background: var(--DarkMode-Grey_800, #2a2a2a);
  color: var(--DarkMode-Grey_300, #aaa);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;

  &.copy {
    padding: 8px 16px;
    color: var(--White, #fff);
  }
`;
