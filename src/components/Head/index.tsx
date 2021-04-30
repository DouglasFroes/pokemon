import React from 'react'
import Link from 'next/link'

import * as Styled from './styled'
import { useRouter } from 'next/router'
import { signOut } from '../../utils/auth'
interface propsHeader {
  userName: string
  searchPokemons?: () => void
}

export default function Header(props: propsHeader) {
  const { userName, searchPokemons } = props
  const router = useRouter()

  return (
    <Styled.Container>
      <Link href="/">
        <Styled.LogoView>
          <img src="/img/logo.png" />
        </Styled.LogoView>
      </Link>
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
            <button>Login</button>
          </Link>
        )}
        <img src="/img/logo2.png" />
      </Styled.LoginView>
    </Styled.Container>
  )
}
