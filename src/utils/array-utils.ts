import { KeyValueType } from '../models/general-models'

export const getUniqueCount = (source: string[]):KeyValueType => {
  if (source.length === 0) return {}

  const results:KeyValueType = {}

  source.forEach((item:string) => {
    results[item] = (results[item] || 0) + 1
  })

  return results
}