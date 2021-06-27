// eslint-disable-next-line
import React from "react"
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { color, typography, breakPoint } from '../styles/constans'

const Nav = ({ open, setOpen }) => {

    return (
        <>
            {open && (
                <Navi>
                    <List>
                        <ListItem>
                            <Link to="/">top</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/reactSample">react sample</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/transitionSample">transition sample</Link>
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
    padding: 8px;
    text-transform: capitalize;
    line-height: 1.5;
    
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
    width: 100%;
    z-index: 2;

    @media (min-width: ${breakPoint}) {
        position: initial;
        width: initial;
    }
`;

