import '@testing-library/jest-dom/extend-expect'
import { showPokemonApi } from '../utils/apiPokemon'

it('call api show pokemon', async () => {
  const result = await showPokemonApi('https://pokeapi.co/api/v2/pokemon/1/')

  expect(result).toBeTruthy()
  expect(result.name).toEqual('bulbasaur')
  expect(result.type).toEqual('grass')
  expect(result.id).toEqual(1)
})
