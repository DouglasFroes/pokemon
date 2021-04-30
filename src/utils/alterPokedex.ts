export function alterMyPokemon(funcPokemon: any, user: string, item: any) {
  if (!user) return
  funcPokemon(item)
}
