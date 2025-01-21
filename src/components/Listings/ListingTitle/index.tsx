import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { TitleContinerStyles, TitleAreaStyles, IconAreaStyles } from './ListingTitle.styled'
import StarIconControl from '../../../controlls/StarIconControl'
import * as UserActions from '../../../actions/user-actions'

interface Props {
  id: number
  title: string
  isFavorite: boolean
}

const Index:FC<Props> = ({ id, title, isFavorite }:Props) => {
  const dispatch = useDispatch()

  const handleClick2 = (e:any) => {
    e.stopPropagation()
    dispatch(UserActions.setFavorite(id))
  }

  return(
    <TitleContinerStyles>
      <TitleAreaStyles>
        {title}
      </TitleAreaStyles>
      <IconAreaStyles onClick={handleClick2}>
        <StarIconControl isFavorite={isFavorite} />
      </IconAreaStyles>
    </TitleContinerStyles>
  )
}

export default Index
