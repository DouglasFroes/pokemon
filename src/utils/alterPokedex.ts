export function alterMyPokemon(funcPokemon: any, user: string, item: any) {
  if (!user) {
    alert('Por favo!, Faça seu login')
    return
  }
  funcPokemon(item)
}
