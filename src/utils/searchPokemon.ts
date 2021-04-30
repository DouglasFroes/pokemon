interface propsPokemons {
  name: string
  id: number
}

export function searchPokemon(pokemons: propsPokemons[], name: string) {
  const result = pokemons.filter(item => {
    return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
  })

  return result
}
