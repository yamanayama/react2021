// eslint-disable-next-line
import React, { useState } from "react";
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from "../components/layout.js"
import { graphql } from 'gatsby'
import Lottie from "react-lottie";
import animationData from "../animation/heroillust.json";
import { color, contentWidth, typography } from '../styles/constans'
import Modal from "../components/modal.js"

const Home = ({ data }) => {
  const defaultOptions = {
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
      <div>
          <Layout>
            <H1>{data.site.siteMetadata.title}</H1>
          
          <LottieWrap>
            <Lottie options={defaultOptions} />
          </LottieWrap>
            <Wrap>
              <H2>modal</H2>
              <button onClick={openModal}>modal open</button>
              <Modal showFlag={showModal} setShowModal={setShowModal}title="タイトルよ" discription="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）"/>
            </Wrap>
          </Layout>
      </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home

const Wrap = styled.div`
  margin: auto;
  max-width: ${contentWidth};
  padding: 48px 0;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: ${typography.fontSize.headline3}px;
`;

const H2 = styled.h2`
  font-size: ${typography.fontSize.headline5}px;
`;

const LottieWrap = styled.div`
  height: auto;
  max-width: 600px;
  margin: auto;
  width: 100%;
`;