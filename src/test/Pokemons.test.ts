import '@testing-library/jest-dom/extend-expect'
import { getPokemonsApi } from '../utils/apiPokemon'

it('call api pokemons', async () => {
  const result = await getPokemonsApi(
    'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=6'
  )

  expect(result).toBeTruthy()
  expect(result.nextPage).toEqual(
    'https://pokeapi.co/api/v2/pokemon/?offset=26&limit=6'
  )
  expect(result.previous).toEqual(
    'https://pokeapi.co/api/v2/pokemon/?offset=14&limit=6'
  )
  expect(result.previous).toBeTruthy()
})
