// eslint-disable-next-line
import React, { useState, useCallback } from "react"
import Layout from "../components/layout.js"
import styled from '@emotion/styled'
import TransitionTest from "../components/transition.js"
import { Transition } from 'react-transition-group'
import { color, typography } from '../styles/constans'

const TransitionSample = () => {
  // animationの状態を持つのにstateが必要。ここだけは面倒だけどしょうがない
  const [animate, setAnimate] = useState(false)

  // ボタンを押したらtrueになって3000ms後にfalseになるように仕組む
  const doAnimate = useCallback(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 3000)
  }, [])

  return (
    <>
      <Layout>
        <Button onClick={doAnimate}>Transition</Button>

        <Transition in={animate} timeout={400}>
          {(state) => (
            <TransitionTest state={state} />
          )}
        </Transition>
      </Layout>
    </>
  );
}

export default TransitionSample

const Button = styled.div`
  border: 1px solid ${color.gray[600]};
  display: inline-block;
  padding: 8px;
  border-radius: 4px;
`