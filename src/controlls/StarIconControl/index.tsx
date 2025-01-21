import { FC } from 'react'
import { StarIconStyles, StarIconHollowStyles } from './StarIconControl.styled'

interface Props {
  isFavorite: boolean
  width?: number
}

const StarIconControl:FC<Props> = ({ isFavorite, width = 18 }:Props) => {
  return (
    <>
      {isFavorite
        ? <StarIconStyles width={width} />
        : <StarIconHollowStyles width={width} />
      }
    </>
  )

}

export default StarIconControl