import React, { ChangeEvent, useState } from 'react'
import Head from 'next/head'
import nextCookie from 'next-cookies'
import { NextPageContext } from 'next'

import Layout from '../components/layout'
import CardPokemon from '../components/CardPokemon'
import StandardContainer from '../components/StandardContainer'
import api from '../services/api'
import { getPokemonsApi, showPokemonApi } from '../utils/apiPokemon'
import Carrossel from '../components/Carrossel '
import Loading from '../components/Loading'
import { useStorage } from '../contexts/StorageContext'
import { alterMyPokemon } from '../utils/alterPokedex'
import useDebounce from '../utils/useDebounce'
import { searchPokemon } from '../utils/searchPokemon'

import * as Styled from './indexStyled.module'

interface propsPokemon {
  name: string
  url: string
  id: number
  type: string
}

interface propsHome {
  pokemons: propsPokemon[]
  allPokemons: propsPokemon[]
  nextPage: string
  previous: string
  pokemonsRandom: propsPokemon[]
  type: any[]
  user: string
}

export default function Home(props: propsHome) {
  const { loadingStor, addPokemon } = useStorage()
  const {
    pokemons,
    nextPage,
    previous,
    pokemonsRandom,
    allPokemons,
    type,
    user
  } = props

  const [listPokemon, setListPokemon] = useState(pokemons)
  const [listPokemonFilter, setListPokemonFilter] = useState([])
  const [listCont, setListCont] = useState(6)
  const [pageCont, setPageCont] = useState({
    a: { pg: 1, active: true },
    b: { pg: 2, active: false },
    c: { pg: 3, active: false }
  })
  const [nextPg, setNextPage] = useState(nextPage)
  const [previousPg, setPreviousPg] = useState(previous)
  const [filterText, setFilter] = useState('Todas')
  const [loading, setLoading] = useState(false)

  const handleContPage = (pgAll: number, pgCurrent: number) => {
    const numPg = Math.ceil(pgAll)
    const pg = Math.ceil(pgCurrent)
    if (numPg < 2) {
      setPageCont({
        a: { pg: 0, active: true },
        b: { pg: 0, active: false },
        c: { pg: 0, active: false }
      })
    } else if (pg === 1) {
      setPageCont({
        a: { pg, active: true },
        b: { pg: pg + 1, active: false },
        c: { pg: pg + 2, active: false }
      })
    } else if (numPg - pg === 0) {
      setPageCont({
        a: { pg: pg - 2, active: false },
        b: { pg: pg - 1, active: false },
        c: { pg, active: true }
      })
    } else {
      setPageCont({
        a: { pg: pg - 1, active: false },
        b: { pg, active: true },
        c: { pg: pg + 1, active: false }
      })
    }
  }

  const newListPokemonApi = async (url: string, num: number) => {
    const pg = (listCont + num) / 6
    handleContPage(allPokemons.length / 2, pg)

    const pkm = await getPokemonsApi(url)
    setNextPage(pkm.nextPage)
    setPreviousPg(pkm.previous)
    setListPokemon(pkm.pokemons)
    setListCont(listCont + num)
  }

  const newListPokemonLock = async (
    item: any[],
    num: number,
    numPages = -1
  ) => {
    let pg = numPages === 0 ? 0 : listCont

    const finalPage = num === -12 ? -(pg % 6) - 6 : pg % 6 || num
    pg = pg + finalPage - 6

    const pkm = []

    if (item.length <= pg) return
    if (pg < 0) return

    setLoading(true)
    let i = 0
    while (i < 6 && item.length >= pg + 1 && pg + 1 > 0) {
      pkm.push(await showPokemonApi(item[pg]?.pokemon?.url || item[pg]?.url))
      pg += 1
      i++
    }

    handleContPage(item.length / 6, pg / 6)
    setListCont(pg)
    setListPokemon(pkm)
    setLoading(false)
  }

  const filterApi = async (item: ChangeEvent<HTMLSelectElement>) => {
    setLoading(true)
    const { data } = await api.get(item.target.value)

    setListPokemonFilter(data.pokemon)
    setFilter(data.name)
    newListPokemonLock(data.pokemon, 6, 0)
  }

  function handleSearchPokemons(item: ChangeEvent<HTMLInputElement>) {
    if (item.target.value.length < 3) return
    const result = searchPokemon(allPokemons, item.target.value)
    setListPokemonFilter(result)
    newListPokemonLock(result, 6, 0)
  }

  const searchDebouche = useDebounce(handleSearchPokemons, 500)

  return (
    <Layout userName={user} searchPokemons={searchDebouche}>
      {(loadingStor || loading) && <Loading />}
      <Styled.Container>
        <Head>
          <title>Pokemon</title>
        </Head>
        <StandardContainer>
          <Styled.Header>
            <label>{filterText}</label>
            <select onChange={filterApi}>
              <option value="" disabled>
                Selecione
              </option>
              {type.map(item => {
                return (
                  <option key={item.name} value={item.url}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </Styled.Header>
          <Styled.Body>
            {listPokemon.map((item, index) => {
              return (
                <CardPokemon
                  name={item.name}
                  id={item.id}
                  type={item.type}
                  key={index}
                  addPokemon={() => alterMyPokemon(addPokemon, user, item)}
                />
              )
            })}
          </Styled.Body>
          <Styled.Footer>
            <ul className={!pageCont?.b?.pg ? 'hidden' : undefined}>
              <li>
                <button
                  onClick={() =>
                    filterText !== 'Todas'
                      ? newListPokemonLock(listPokemonFilter, -6)
                      : newListPokemonApi(previousPg, -6)
                  }
                  className={pageCont?.a?.active ? 'active' : undefined}
                >
                  <i className="fa fa-chevron-left" />
                </button>
              </li>
              <li className="none">
                <button
                  className={pageCont?.a?.active ? 'active' : undefined}
                  onClick={() => {
                    const cont = pageCont?.c?.active ? -12 : -6
                    filterText !== 'Todas'
                      ? newListPokemonLock(listPokemonFilter, cont)
                      : newListPokemonApi(previousPg, -6)
                  }}
                >
                  {pageCont?.a.pg}
                </button>
              </li>
              <li className="none">
                <button
                  className={pageCont?.b?.active ? 'active' : undefined}
                  onClick={() => {
                    if (pageCont?.a?.active) {
                      filterText !== 'Todas'
                        ? newListPokemonLock(listPokemonFilter, 6)
                        : newListPokemonApi(nextPg, 6)
                    }
                    if (pageCont?.c?.active) {
                      filterText !== 'Todas'
                        ? newListPokemonLock(listPokemonFilter, -6)
                        : newListPokemonApi(nextPg, -6)
                    }
                  }}
                >
                  {pageCont?.b.pg}
                </button>
              </li>
              <li className="none">
                <button
                  className={pageCont?.c?.active ? 'active' : undefined}
                  onClick={() => {
                    const cont = pageCont?.a?.active ? 12 : 6
                    const url = pageCont?.a?.active
                      ? 'https://pokeapi.co/api/v2/pokemon/?offset=12&limit=6'
                      : nextPg
                    filterText !== 'Todas'
                      ? newListPokemonLock(listPokemonFilter, cont)
                      : newListPokemonApi(url, cont)
                  }}
                >
                  {pageCont?.c.pg}
                </button>
              </li>
              <li>
                <button
                  className={pageCont?.c?.active ? 'active' : undefined}
                  onClick={() =>
                    filterText !== 'Todas'
                      ? newListPokemonLock(listPokemonFilter, 6)
                      : newListPokemonApi(nextPg, 6)
                  }
                >
                  <i className="fa fa-chevron-right" />
                </button>
              </li>
            </ul>
          </Styled.Footer>
        </StandardContainer>
        <Styled.SliderFooter>
          <Carrossel
            pokemons={pokemonsRandom}
            addPokemon={addPokemon}
            user={user}
          />
        </Styled.SliderFooter>
      </Styled.Container>
    </Layout>
  )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const { user } = nextCookie(ctx)
  console.log(user)

  const { data } = await api.get('pokemon', {
    params: {
      limit: 6,
      offset: 0
    }
  })

  const { data: type } = await api.get('type')

  const { data: data2 } = await api.get('pokemon', {
    params: {
      limit: 2000,
      offset: 0
    }
  })

  const allPokemons: any[] = data2.results

  const pok = data.results.map(async (item: propsPokemon) => {
    return showPokemonApi(item.url)
  })

  const pkmRandom = []

  for (let i = 0; i <= 10; i++) {
    const cont = Math.floor(Math.random() * allPokemons.length + 1)

    const response = await showPokemonApi(`pokemon/${allPokemons[cont]?.name}`)
    if (response) pkmRandom.push(response)
  }

  const result = await Promise.all(pok)
  const pokemonsRandom = await Promise.all(pkmRandom)
  return {
    nextPage: data?.next,
    previous: data?.previous,
    pokemons: result,
    pokemonsRandom,
    allPokemons,
    type: type?.results,
    user
  }
}
