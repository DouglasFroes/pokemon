import api from '../services/api'

export async function showPokemonApi(url: string, all = false) {
  try {
    const { data } = await api.get(url)

    if (all) return data

    return {
      name: data?.name,
      id: data?.id,
      type: data?.types[0]?.type?.name
    }
  } catch (err) {
    console.log(url)
    console.log(err?.response?.data)
  }
}

export async function getPokemonsApi(url: string) {
  const { data } = await api.get(url)

  const pok = data.results.map(async (item: any) => {
    return showPokemonApi(item.url)
  })
  const pokemons: any = await Promise.all(pok)

  return {
    nextPage: data?.next,
    previous: data?.previous,
    pokemons
  }
}
