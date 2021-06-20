// eslint-disable-next-line
import React, { useState } from "react";
import styled from '@emotion/styled';
import Layout from "../components/layout.js"
import Lottie from "react-lottie";
import heroAnimation from "../animation/heroillust.json";
import { color, contentWidth, typography } from '../styles/constans'
import Modal from "../components/modal.js"


const ReactSample = () => {
    const heroillust = {
        loop: true,
        autoplay: true,
        heroAnimation,
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
          <Layout>
            <LottieWrap>
                <Lottie options={heroillust} />
            </LottieWrap>
            <Wrap>
                <H2>modal</H2>
                <button onClick={openModal}>modal open</button>
                <Modal showFlag={showModal} setShowModal={setShowModal}title="タイトルよ" discription="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）"/>
            </Wrap>
          </Layout>
        </>
    )
}

export default ReactSample


const H2 = styled.h2`
  font-size: ${typography.fontSize.headline5}px;
`;

const LottieWrap = styled.div`
  height: auto;
  max-width: 600px;
  margin: auto;
  width: 100%;
`;

const Wrap = styled.div`
  margin: auto;
  max-width: ${contentWidth};
  padding: 48px 0;
  text-align: center;
`;
