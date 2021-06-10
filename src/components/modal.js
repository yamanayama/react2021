// eslint-disable-next-line
import React, { useState } from 'react';
import styled from '@emotion/styled'
import { color, typography, breakPoint } from '../styles/constans'


const Modal = (props) => {
    const closeModal = () => {
        props.setShowModal(false);
      };

    return (
        <>
            { props.showFlag && (
                <Overlay>
                    <Main>
                        <H2>{props.title}</H2>
                        <Body>{props.discription}</Body>
                        <CloseButton onClick={closeModal}>✕</CloseButton>
                    </Main>
                </Overlay>
            )}
        </>
    )
}

export default Modal

const Overlay = styled.div `
    align-items: center;
    background: rgba(0,0,0,0.6);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
`;

const Main = styled.div`
    background: ${color.gray[50]};
    border-radius: 8px;
    margin: auto;
    max-width: 600px;
    padding: 24px;
    position: relative;
    text-align: left;
    width: 100%;
    margin: 16px;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: -40px;
    font-size: ${typography.fontSize.headline5}px;
    color: ${color.gray[10]}
`;

const H2 = styled.h2`
  font-size: ${typography.fontSize.headline5}px;
`;

const Body = styled.p`
  font-size: ${typography.fontSize.body1}px;
`;