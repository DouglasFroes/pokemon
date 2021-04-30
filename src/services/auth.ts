import api from './api'

interface Response {
  token: string
  user: {
    userName: string
    userId: string
    role: string | null
  }
}

interface objSignUp {
  name: string
  senha: string
  passowrd: string
}
export async function signIn(
  email: string,
  password: string
): Promise<Response> {
  const response = await api.post('auth/session', {
    userName: email,
    password
  })

  const data: Response = response.data
  return new Promise(resolve => {
    resolve(data)
  })
}

export async function signUp(obj: objSignUp) {
  const response = await api.post('auth/user/funcionario', obj)

  console.log(response)

  return true
}
