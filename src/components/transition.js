// eslint-disable-next-line
import React from 'react'
import styled from '@emotion/styled'
import { color, typography } from '../styles/constans'

const TransitionTest = ({ state }) => {

  return (
      <Wrapper>
        今のStateは{state}だよ
        <Animation state={state}>
        </Animation>
      </Wrapper>
    )
}

export default TransitionTest

const Wrapper = styled.div`
  height: 400px;
  margin: auto;
`

const Animation = styled.div`
  align-items: center;
  border-radius: ${({ state }) => (state === "exiting" ? 0 : 50)}%;
  color: ${color.white};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  justify-content: center;
  font-size: ${typography.fontSize.body2}px;
  width: 100px;
  height: 100px;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  text-align: center;
  transition: all .5s ease-in-out;
  transform: translateX(${({ state }) => (state === "entering" || state === "entered" ? 200 : 0)}px);
  background: ${({ state }) => {
    switch (state) {
      case "entering":
        return "red"
      case "entered":
        return "blue"
      case "exiting":
        return "green"
      case "exited":
        return "yellow"
    }
  }};
`