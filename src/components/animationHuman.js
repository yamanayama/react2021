// eslint-disable-next-line
import React, { useContext } from "react"
import styled from '@emotion/styled'
import Lottie from "react-lottie"
import { breakPoint, typography } from '../styles/constans'
import animationData from "../animation/heroillust.json"
import { AnimationContext } from './AnimationContext'

export const AnimationHuman = () => {
  const [stop, setStop] = useContext(AnimationContext);

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
                  eventName: 'start',
                  callback: obj => {
                    if (stop === true) {
                      setStop(!stop);
                    }
                  }
                }
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
