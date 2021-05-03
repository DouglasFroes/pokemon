import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

import * as styled from './styled'
import { useRouter } from 'next/router'
import Button from '../../components/Button'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const refEmail = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function handleSubmit() {
    if (refEmail?.current?.value && refPassword?.current?.value) {
      setLoading(true)
      try {
        document.cookie = `token=${'data?.token'}; path=/`
        document.cookie = `user=${refEmail?.current?.value}; path=/`
        router.push('/')
      } catch (err) {
        console.log(err.response)
        alert('Email ou senha invalidade, verifique e tente novamente')
        setLoading(false)
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <styled.container>
        <styled.heading>
          <h2>Login</h2>
          <div className="line-dec"></div>
        </styled.heading>
        <styled.body>
          <styled.fromLogin>
            <styled.inputLogin
              id="UserName"
              type="text"
              name="email"
              placeholder="Email"
              ref={refEmail}
            />
            <styled.inputLogin
              type="password"
              placeholder="Senha"
              ref={refPassword}
            />
            <Button
              label="Entrar"
              style={{ width: '100%' }}
              onClick={handleSubmit}
            />
            <styled.loading style={!loading ? { display: 'none' } : {}} />
          </styled.fromLogin>
        </styled.body>
      </styled.container>
    </Layout>
  )
}
