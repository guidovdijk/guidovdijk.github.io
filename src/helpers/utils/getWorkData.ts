import { ICardProps } from '@/components/molecules/card'
import { workData } from '../constants/work-data'

const getPreviousIndex = (maxItems: number, index: number): number => {
  const prev = index - 1
  return prev < 0 ? maxItems : prev
}

const getNextIndex = (maxItems: number, index: number): number => {
  const next = index + 1
  return next > maxItems ? 0 : next
}

export const getWorkData = (index: number): ICardProps[] => {
  const maxItems = workData.length
  const prev = getPreviousIndex(maxItems, index)
  const next = getNextIndex(maxItems, index)

  return [
    workData[prev],
    workData[next],
  ]
}
