import React from 'react'
import Link from 'next/link'

import * as Styled from './styled'
import { useRouter } from 'next/router'
import { signOut } from '../../utils/auth'
interface propsHeader {
  userName?: string
  searchPokemons?: () => void
  init?: boolean
}

export default function Header(props: propsHeader) {
  const { userName, searchPokemons, init } = props
  const router = useRouter()

  return (
    <Styled.Container>
      <Styled.LogoView
        onClick={() => {
          init ? router.reload() : router.replace('/')
        }}
      >
        <img src="/img/logo.png" />
      </Styled.LogoView>
      <Styled.SearchView className={!searchPokemons ? 'none' : undefined}>
        <input placeholder="Search Pokémon" onChange={searchPokemons} />
      </Styled.SearchView>
      <Styled.LoginView>
        {userName ? (
          <button
            onClick={() => {
              userName === 'Sair' ? signOut() : router.push('/pokedex')
            }}
          >
            {userName}
          </button>
        ) : (
          <Link href="/login">
            <button className={!searchPokemons ? 'none' : undefined}>
              Login
            </button>
          </Link>
        )}
        <img src="/img/logo2.png" />
      </Styled.LoginView>
    </Styled.Container>
  )
}
