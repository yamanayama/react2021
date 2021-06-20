// eslint-disable-next-line
import React, { useState } from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout.js"
import { AnimationHuman }  from "../components/animationHuman.js"
import { graphql } from 'gatsby'
import { color, contentWidth, typography } from '../styles/constans'

const Home = ({ data }) => {
  return (
      <div>
          <Layout>
            <H1>{data.site.siteMetadata.title}</H1>
            <p>Reactのコードサンプルを置いています</p>
              <AnimationHuman />
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
