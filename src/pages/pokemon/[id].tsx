import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import nextCookie from 'next-cookies'
import { GetStaticPaths, GetStaticProps, NextPageContext } from 'next'

import Layout from '../../components/layout'

import * as Styled from './styled.module'
import StandardContainer from '../../components/StandardContainer'
import { showPokemonApi } from '../../utils/apiPokemon'
import { useRouter } from 'next/router'

export default function Home({ pokemon, user }: any) {
  const router = useRouter()

  if (router.isFallback) return <p>...carregando</p>

  return (
    <Layout>
      <Styled.Container>
        <Head>
          <title>{pokemon.name}</title>
        </Head>
        <StandardContainer>
          <Styled.Header>
            <h3>Tipo</h3>
            <ul>
              {pokemon.types.map(item => {
                return (
                  <li key={item.type.name}>
                    <div className={item.type.name}>
                      <label>{item.type.name} </label>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Styled.Header>
          <Styled.Body>
            <div className="image">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={300}
                height={300}
                // sizes="corver"
              />
            </div>
            <div>
              <h2>{pokemon.name}</h2>
              <div className="height">
                <p>Altura: {pokemon.height / 10} m</p>
                <p>Peso: {pokemon.weight / 10} kg</p>
              </div>
              <div className="kills">
                <h3>skills</h3>
                <ul>
                  {pokemon.moves.map(item => {
                    return (
                      <li key={item.move.name} className={item.move.name}>
                        <p>{item.move.name};</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Styled.Body>
        </StandardContainer>
      </Styled.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async item => {
  const pokemon = await showPokemonApi(
    `https://pokeapi.co/api/v2/pokemon/${item.params.id}`,
    true
  )
  return {
    props: { pokemon }
  }
}
