import React from 'react';
import { klaatooSmall, gearIcon, qrIcon } from 'assets';
import styled, { css } from 'styled-components';

function GnbBar() {
  return (
    <GnbWrap>
      <img src={klaatooSmall} alt={'klaatoo'} />
      <ItemWrap>
        <ItemButton src={qrIcon} aria-label={'qrcode button'}></ItemButton>
        <ItemButton src={gearIcon} aria-label={'setting button'}></ItemButton>
      </ItemWrap>
    </GnbWrap>
  );
}

export default GnbBar;

const flexRowStyle = css`
  display: flex;
  flex-direction: row;
`;

const GnbWrap = styled.header`
  ${flexRowStyle}
  justify-content: space-between;
  padding: 1.7rem 1.6rem;
`;

const ItemWrap = styled.div`
  ${flexRowStyle}
  align-items: center;
  gap: 1.6rem;
`;

const ItemButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-size: contain;
  ${(props) =>
    props.src &&
    css`
      background-image: url(${props.src});
    `}
`;
