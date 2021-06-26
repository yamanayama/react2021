// eslint-disable-next-line
import React, { useState } from "react";
import styled from '@emotion/styled';
import Layout from "../components/layout.js"
import { AnimationHuman }  from "../components/animationHuman.js"
import { contentWidth, typography } from '../styles/constans'
import Modal from "../components/modal.js"
import Tab from "../components/tab.js"


const ReactSample = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };

    return (
        <>
          <Layout>
            <AnimationHuman />
            <Wrap>
                <H2>Drawer</H2>
                <p>スマホサイズで右上からどうぞ！</p>
            </Wrap>
            <Wrap>
                <H2>Modal</H2>
                <button onClick={openModal}>モーダルが開きます</button>
                <Modal showFlag={showModal} setShowModal={setShowModal}title="タイトルよ" discription="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）"/>
            </Wrap>
            <Wrap>
                <H2>Tab</H2>
                <Tab/>
            </Wrap>
          </Layout>
        </>
    )
}

export default ReactSample


const H2 = styled.h2`
  font-size: ${typography.fontSize.headline5}px;
`;

const Wrap = styled.div`
  margin: auto;
  max-width: ${contentWidth};
  width: 100%;
  padding: 48px 0;
  text-align: center;
`;
