// eslint-disable-next-line
import React from "react"
import styled from '@emotion/styled'
import Lottie from "react-lottie"
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
  max-width: 600px;
  margin: auto;
  width: 100%;
`;
