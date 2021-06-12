// eslint-disable-next-line
import React, { useState } from "react";
import { styled } from '@linaria/react';
import Layout from "../components/layout.js"
import { graphql } from 'gatsby'
import Lottie from "react-lottie";
import animationData from "../animation/heroillust.json";
import { color, contentWidth, typography } from '../styles/constans'

const Home = ({ data }) => {
  return (
      <div>
          <Layout>
            <H1>{data.site.siteMetadata.title}</H1>
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

const H1 = styled.h1`
  font-size: ${typography.fontSize.headline3}px;
`;

