// eslint-disable-next-line
import React, { useState } from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout.js"
import { AnimationHuman }  from "../components/animationHuman.js"
import { graphql } from 'gatsby'
import { typography } from '../styles/constans'
import { AnimationContextProvider } from "../components/animationContext.js"

const Home = ({ data }) => {
  return (
      <div>
          <Layout>
            <H1>{data.site.siteMetadata.title}</H1>
            <p>Reactのコードサンプルを置いています</p>
              <AnimationContextProvider>
                <AnimationHuman />
              </AnimationContextProvider>
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
