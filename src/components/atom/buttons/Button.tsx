import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

/**
 * Button Components
 * @param type type
 * @param className Disable, Dim
 * @param size button width || 100%
 * @param onConfirm button function
 * @param text button text
 */

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: 'disable' | 'dim' | 'point';
  size?: number;
  active?: boolean;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}


function Button({ type, className, size, active = true, onConfirm, text }:ButtonProps): JSX.Element {
  const btnClassName = active === true ? className : 'disable';

  return (
    <ComonButton
      type={type}
      className={`${btnClassName}`}
      size={size}
      onClick={onConfirm}
    >
      {text}
    </ComonButton>
  );
}

export default Button;

const ComonButton = styled.button<{ className?: string; size?: number }>`
  width: 100%;
  font-weight: 600;
  line-height: 1.9rem;
  font-size: 1.6rem;
  border-radius: 1.2rem;
  padding: 1.45rem 0;
  background: var(--PointColor);
  color: var(--White);
  box-sizing: border-box;
  text-align: center;

  ${(props) =>
    props.className === 'disable' &&
    css`
      background: var(--DarkMode-Grey_400, #868686);
      color: var(--DarkMode-Grey_500, #686868);
    `}

  ${(props) =>
    props.className === 'dim' &&
    css`
      background: var(--DarkMode-Grey_800);
    `}
  
    ${(props) =>
    props.className === 'point' &&
    css`
      color: var(--Orange, #f45e22);
      box-shadow: 0 0 0 1px var(--DarkMode-Grey_600, #434343) inset;
      background: var(--DarkMode-Grey_900, #212121);
    `}

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}rem;
    `}
`;
