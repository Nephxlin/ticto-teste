interface Data {
  type: string
  value: number
}

export interface ICalculateTransactionResult {
  inTotal: number
  outTotal: number
  difference: number
}

export function calculateTransactionData(
  data: Data[]
): ICalculateTransactionResult {
  let inTotal = 0
  let outTotal = 0

  data.forEach((item) => {
    if (item.type === 'in') {
      inTotal += item.value
    } else {
      outTotal += item.value
    }
  })

  const difference = inTotal - outTotal

  return {
    inTotal,
    outTotal,
    difference,
  }
}
