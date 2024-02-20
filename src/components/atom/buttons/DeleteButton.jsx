import React from 'react';
import styled from 'styled-components';
import { trash } from 'assets';

function DeleteButton({ onConfirm }) {
  return (
    <Button onClick={onConfirm}>
      <img src={trash} alt="delete"></img>
      <p>Delete Account</p>
    </Button>
  );
}

export default DeleteButton;

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
`;
