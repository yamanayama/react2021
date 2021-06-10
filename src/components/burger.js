// eslint-disable-next-line
import React from "react"
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { color, typography, breakPoint } from '../styles/constans'

const Burger = ({ open, setOpen }) => {

    return (
        <>
            <Hamburger>
                <HamburgerButton
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {!open ? (
                        <HamburgerOpen />
                        ):(
                        <HamburgerClose/>
                        )
                    }
                </HamburgerButton>
            </Hamburger>
        </>
    );
};

export default Burger

const Hamburger = styled.div`
    font-size: ${typography.fontSize.headline5}px;
`;

const HamburgerButton = styled.button`
    display: flex;
    height: 45px;
    justify-content: center;
    position: relative;
    transition: all .3s ease-in-out;
    width: 45px;
    z-index: 100;
`;

const HamburgerOpen = styled.div`
    background: currentColor;
    height: 1px;
    margin-left: 2px;
    margin-top: 10px;
    position: absolute;
    width: 17px;

    &::before,&::after{
        background: currentColor;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        width: 17px;
    }

    &::before{
        top: -5px;
    }

    &::after{
        top: 5px;
    }
`;

const HamburgerClose = styled.div`
    align-items: center;
    color: ${color.text.high};
    display: flex;
    height: 21px;
    margin-top: 0;
    margin-left: 0;
    position: relative;
    width: 21px;

    &::before,&::after {
        background: currentColor;
        content: '';
        height: 1px;
        position: absolute;
        width: 21px;
        top: 10px;
    }

    &::before {
        transform: rotate(-45deg);
    }

    &::after {
        transform: rotate(45deg);
    }
`;