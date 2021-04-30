function stringAdd(item: string) {
  const result = parseFloat(
    item
      .substring(0, item.length - 2)
      .concat('.')
      .concat(item.substring(item.length - 2))
  )

  return result.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

export function calculateCallValue(plan: number, cost: number, minute: number) {
  let result = 0

  if (minute - plan <= 0) {
    result = 0
  } else {
    result = (minute - plan) * cost
    result += result * 0.1
  }

  return {
    withPlan: stringAdd(result.toString()),
    withoutPlan: stringAdd((cost * minute).toString())
  }
}
