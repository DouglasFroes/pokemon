import React from 'react'
import Head from 'next/head'

import Header from '../Head'
import Footer from '../footer'

import * as Styled from './styled'

export const siteTitle = 'Portfolio Douglas S. Froes'

const Layout: React.FC<any> = ({ children, searchPokemons, userName }: any) => {
  return (
    <Styled.Container>
      <Head>
        <link rel="icon" href="/images/icon.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header userName={userName} searchPokemons={searchPokemons} />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.Container>
  )
}

export default Layout
