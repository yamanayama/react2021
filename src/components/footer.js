// eslint-disable-next-line
import React from 'react'
import { styled } from '@linaria/react'
import { StaticQuery, graphql } from 'gatsby'
import { color, typography } from '../styles/constans'

const Footer = () => {
     
  return (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <Foot>
                <div>© murakami naomi {data.site.siteMetadata.title} { (new Date()).getFullYear() }</div>
            </Foot>
            )}
        />
    )
}

export default Footer

const Foot = styled.footer`
    border-top: 1px solid ${color.text.high};
    font-size: ${typography.fontSize.body2}px;
    padding-top: 16px;
    margin-top: 16px;
    text-align: center;
`;
