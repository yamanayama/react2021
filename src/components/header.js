// eslint-disable-next-line
import React, { useState } from 'react';
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'
import { color, typography, breakPoint } from '../styles/constans'
import useMedia from 'use-media';
import Nav from './nav'
import Burger from './burger'

const Header = () => {
    const [open, setOpen] = useState(false);
    const isPc = useMedia({minWidth: breakPoint});
 
  return (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <Heading>
                <H2><Link to="/">{data.site.siteMetadata.title}</Link></H2>
                {!isPc ? ( 
                    <>
                        <Burger open={open} setOpen={setOpen}/>
                        <Nav open={open} setOpen={setOpen} />
                    </>
                ) : (
                    <Nav open/>
                )}
                {open && (
                    <Overlay/>
                )}
            </Heading>
        )}
     />
  )
}

export default Header

const Heading = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    position: relative;
    width: 100%;
`;

const H2 = styled.h2`
    font-size: ${typography.fontSize.headline5}px;
`;

const Overlay = styled.div`
    background: ${color.blue[100]};
    height: 100vh;
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    transition: all .3s ease-in-out;
    width: 100vw;
    z-index: 1;
`;

