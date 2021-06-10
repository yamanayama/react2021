import React from "react"
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { color, typography, breakPoint } from '../styles/constans'

const Nav = ({ open, setOpen }) => {
 
  return (
    <>
        { open && (
             <Navi>
                <List>
                    <ListItem>
                        <Link to="/">top</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/about">about</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/work">work</Link>
                    </ListItem>
                </List>
            </Navi>
        )}
    </>
  )
}

export default Nav

const List = styled.ul`
    display: ${props =>
        props.open ? 'none' : 'block'
    };
    font-size: ${typography.fontSize.headline4}px;
    transition: all .3s ease-in-out;

    @media (min-width: ${breakPoint}) {
        display: flex;
        font-size: ${typography.fontSize.body2}px;
        flex-shrink: 0;
        margin-left: auto;
        padding: 0;
    }
`;

const ListItem = styled.li`
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    &:hover{
        background: ${color.blue[50]};
    }
`;

const Navi = styled.nav`
    color: ${color.text.high};
    left: 50%;
    position: absolute;
    text-align: center;
    top: 64px;
    transform: translateX(-50%);
    z-index: 2;
    @media (min-width: ${breakPoint}) {
        position: initial;
    }
`;

