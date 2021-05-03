import React, { createContext, useState, useEffect, useContext } from 'react'

interface pokemon {
  id: number
  name: string
}
interface StorageContextData {
  myPokemons: pokemon[]
  addPokemon: (item: pokemon) => void
  removePokemon: (id: number) => void
  loadingStor
}

const StorageContext = createContext<StorageContextData>(
  {} as StorageContextData
)

export const StorageProvider: React.FC = ({ children }: any) => {
  const [pokemons, setPokemons] = useState([] as pokemon[])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const storagePokemons = await localStorage.getItem('@RNext:pokemons')
      if (storagePokemons) {
        setPokemons(JSON.parse(storagePokemons))
      }
      setLoading(false)
    }

    loadStorageData()
  }, [])

  async function addPokemon(item: pokemon) {
    const pkm = pokemons.filter(obj => {
      return obj.id === item.id
    })
    if (pkm.length > 0) {
      alert('voce ja possui esse pokemon')
      return
    }

    setPokemons([...pokemons, item])
    await localStorage.setItem(
      '@RNext:pokemons',
      JSON.stringify([...pokemons, item])
    )
    alert('Pokemon capitulado')
  }

  async function removePokemon(id: number) {
    const pkm = pokemons.filter(item => {
      return item.id !== id
    })
    setPokemons(pkm)
    localStorage.setItem('@RNext:pokemons', JSON.stringify(pkm))
  }

  return (
    <StorageContext.Provider
      value={{
        myPokemons: pokemons,
        addPokemon,
        removePokemon,
        loadingStor: loading
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage() {
  const context = useContext(StorageContext)

  return context
}
