import styled, { css } from 'styled-components';
import { ErrorIcon, CheckIcon } from 'assets';

export const InputWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const InputTitle = styled.label`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--White);
  margin-bottom: 0.8rem;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--DarkMode-Grey_700, #363636);
  background: var(--DarkMode-Grey_800, #2a2a2a);
  padding: 1.2rem;
  color: var(--White);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  box-sizing: border-box;

  &:active,
  &:focus {
    border: 1px solid var(--White, #fff);
  }
  &.correctInput {
    border: 1px solid var(--Status-Status_Fine);
  }

  &.errorInput {
    border: 1px solid var(--Status-Status_Alert);
  }

  &::placeholder {
    color: var(--DarkMode-Grey_400, #868686);
    font-size: 1.6rem;
    line-height: 1.9rem;
    font-weight: 500;
  }
`;

export const Unit = styled.p`
  position: absolute;
  right: 1.6rem;
  bottom: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: var(--gray-color-200);
`;

export const ErrorMessegg = styled.p`
  color: var(--Status-Status_Alert, #e24343);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  margin-top: 1.3rem;
  text-align: left;
  position: relative;
  padding-left: 2.4rem;
  height: 1.6rem;

  &::after {
    content: '';
    background: url(${ErrorIcon});
    width: 1.6rem;
    height: 1.6rem;
    display: inline-block;
    left: 0;
    top: 0;
    position: absolute;
  }

  &.correct {
    color: var(--Status-Status_Fine);
    &::after {
      background: url(${CheckIcon});
    }
  }
`;
