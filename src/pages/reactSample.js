// eslint-disable-next-line
import React, { useState } from "react";
import { styled } from '@linaria/react';
import Layout from "../components/layout.js"
import { graphql } from 'gatsby'
import Lottie from "react-lottie";
import animationData from "../animation/heroillust.json";
import { color, contentWidth, typography } from '../styles/constans'
import Modal from "../components/modal.js"


export const ReactSample = ({ data }) => {
    const heroillust = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(true);
    };

    return (
        <>
            <LottieWrap>
                <Lottie options={heroillust} />
            </LottieWrap>
            <Wrap>
                <H2>modal</H2>
                <button onClick={openModal}>modal open</button>
                <Modal showFlag={showModal} setShowModal={setShowModal}title="タイトルよ" discription="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）"/>
            </Wrap>
        </>
    )
}


const H2 = styled.h2`
  font-size: ${typography.fontSize.headline5}px;
`;

const LottieWrap = styled.div`
  height: auto;
  max-width: 600px;
  margin: auto;
  width: 100%;
`;

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`