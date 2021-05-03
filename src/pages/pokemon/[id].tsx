import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout'

import * as Styled from './styled.module'
import StandardContainer from '../../components/StandardContainer'
import { showPokemonApi } from '../../utils/apiPokemon'
import { useRouter } from 'next/router'

export default function Home({ pokemon }: any) {
  const [imgErr, setImgErr] = useState(false)
  const router = useRouter()

  const srcDefault = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`

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
                src={imgErr ? srcDefault : src}
                alt={pokemon.name}
                width={300}
                height={300}
                // sizes="corver"
                onError={() => {
                  setImgErr(true)
                }}
              />
            </div>
            <div>
              <h2>{pokemon.name}</h2>
              <div className="height">
                <p>Altura: {pokemon.height / 10} m</p>
                <p>Peso: {pokemon.weight / 10} kg</p>
              </div>
              <div className="kills">
                <h3>Skills</h3>
                <ul>
                  {pokemon.moves.map(item => {
                    return (
                      <li key={item.move.name}>
                        <p>{item.move.name};</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <br />
              <div className="kills">
                <h3>Habilidades</h3>
                <ul>
                  {pokemon.abilities.map(item => {
                    return (
                      <li key={item.ability.name}>
                        <p>{item.ability.name};</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <br />
              <div className="kills">
                <h3>Estatísticas</h3>
                <ul>
                  {pokemon.stats.map((item, index) => {
                    return (
                      <li key={index}>
                        <p>
                          {item.stat.name}: <span>{item.base_stat};</span>
                        </p>
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
