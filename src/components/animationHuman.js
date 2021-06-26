// eslint-disable-next-line
import React, { useState } from "react"
import styled from '@emotion/styled'
import Lottie from "react-lottie"
import { breakPoint, typography } from '../styles/constans'
import animationData from "../animation/heroillust.json"

export const AnimationHuman = () => {
  const [stop, setStop] = useState(true);

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
            <Lottie
              options={defaultOptions}
              isStopped={stop}
              isClickToPauseDisabled={true}
              ariaRole={''}
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: () => setStop(true),
                },
              ]}
            />
        </LottieWrap>
      </>
  )
}

const LottieWrap = styled.div`
  height: auto;
  margin: auto;
  width: 100%;

  @media (min-width: ${breakPoint}) {
    max-width: 680px;
    width: 100%;
  }
`;
