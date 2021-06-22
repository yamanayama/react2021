// eslint-disable-next-line
import React from "react"
import styled from '@emotion/styled'
import Lottie from "react-lottie"
import { breakPoint, typography } from '../styles/constans'
import animationData from "../animation/heroillust.json"

export const AnimationHuman = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
      <>
        <LottieWrap>
          <Lottie options={defaultOptions} height={500} width={500} />
        </LottieWrap>
      </>
  )
}

const LottieWrap = styled.div`
  height: auto;
  margin: auto;
  width: 100%;

  @media (min-width: ${breakPoint}) {
    display: flex;
    font-size: ${typography.fontSize.body2}px;
    flex-shrink: 0;
    margin-left: auto;
    padding: 0;
    max-width: 600px;
  }
`;
