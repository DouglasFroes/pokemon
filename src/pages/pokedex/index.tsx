import React, { ChangeEvent, useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from '../../components/layout'

import * as Styled from './styled.module'
import StandardContainer from '../../components/StandardContainer'
import TrPokemon from '../../components/TrPokemon'
import { useStorage } from '../../contexts/StorageContext'
import { showPokemonApi } from '../../utils/apiPokemon'
import Loading from '../../components/Loading'
import { alterMyPokemon } from '../../utils/alterPokedex'
import { NextPageContext } from 'next'
import { auth } from '../../utils/auth'
import { searchPokemon } from '../../utils/searchPokemon'

interface propsPokemon {
  name: string
  type?: string
  id: number
}

export default function MyPokedex({ user }: any) {
  const { myPokemons, loadingStor, removePokemon } = useStorage()
  const [listPokemon, setListPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleApi(pokemons: propsPokemon[]) {
    const pok = pokemons.map(async (item: propsPokemon) => {
      return await showPokemonApi('pokemon/' + item?.id)
    })
    const result = await Promise.all(pok)
    setListPokemon(result)
    setLoading(false)
  }

  useEffect(() => {
    handleApi(myPokemons)
  }, [loadingStor, myPokemons])

  function handleSearchPokemons(item: ChangeEvent<HTMLInputElement>) {
    if (item.target.value.length < 2) {
      handleApi(myPokemons)
      return
    }
    const result = searchPokemon(myPokemons, item.target.value)
    handleApi(result)
  }

  return (
    <Layout userName="Sair" searchPokemons={handleSearchPokemons}>
      {(loading || loadingStor) && <Loading />}
      <Styled.Container>
        <Head>
          <title>Meus Pokemons</title>
        </Head>
        <StandardContainer>
          <Styled.Header>
            <label>Pokedex de {user}</label>
          </Styled.Header>
          <Styled.Body>
            <table>
              <thead>
                <tr>
                  <th>Foto</th>
                  <th className="none">Nome</th>
                  <th className="none">Tipo</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {listPokemon.map(item => {
                  return (
                    <TrPokemon
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      removePokemon={() =>
                        alterMyPokemon(removePokemon, user, item.id)
                      }
                    />
                  )
                })}
              </tbody>
            </table>
          </Styled.Body>
        </StandardContainer>
      </Styled.Container>
    </Layout>
  )
}

MyPokedex.getInitialProps = async (ctx: NextPageContext) => {
  const user = auth(ctx)

  return {
    user
  }
}
