// eslint-disable-next-line
import React from 'react'
import Header from './header'
import Footer from './footer'
import { Global, css } from '@emotion/react'
import styled from "@emotion/styled"
import { color, contentWidth } from '../styles/constans'
import '../styles/destyle.css'
import "@fontsource/noto-sans-jp"

const Layout = ( props ) => {
    return (
        <>
            <Global styles={global}/>
            <Main>
                <Header/>
                    { props.children }
                <Footer/>
            </Main>
        </>

    )
}

export default Layout

const global = css`
  :global() {
    html{
        background: ${color.white};
        color: ${color.text.high};
        font-family: 'Noto Sans JP', sans-serif;
        }

        body{
            padding: 0 16px;
            @media (min-width: ${contentWidth}) {
                padding: 0;
            }
        }
    }
`;

const Main = styled.main`
    margin: auto;
    max-width: ${contentWidth};
    width: 100%;
    padding: 0 16px;
`