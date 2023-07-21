import { ICardProps } from '@/components/molecules/card'
import { workData } from '../constants/work-data'

const getPreviousIndex = (maxItems: number, index: number): number => {
  const prev = index - 1
  // Get previous index or the maxItem number if `prev` < 0
  return prev < 0 ? maxItems : prev
}

const getNextIndex = (maxItems: number, index: number): number => {
  const next = index + 1
  // Get next index or 0 if `next` > maxItems
  return next > maxItems ? 0 : next
}

interface IDataProps {
  current: ICardProps
  prev: ICardProps
  next: ICardProps
}

export const getWorkData = (index: number): IDataProps => {
  const maxItems = workData.length
  const prev = getPreviousIndex(maxItems, index)
  const next = getNextIndex(maxItems, index)

  return {
    current: workData[index],
    prev: workData[prev],
    next: workData[next],
  }
}
