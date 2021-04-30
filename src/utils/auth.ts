import { NextPageContext } from 'next'
import nextCookie from 'next-cookies'
import Router from 'next/router'

export const auth = (ctx: NextPageContext) => {
  const { user } = nextCookie(ctx)

  if (ctx.req && !user) {
    ctx?.res?.writeHead(302, { Location: '/login' })
    ctx?.res?.end()
    return
  }

  if (!user) {
    Router.push('/login')
  }

  return user
}
export function signOut() {
  document.cookie = 'user=; expires=Thu,  path=/;'
  Router.push('/')
}
