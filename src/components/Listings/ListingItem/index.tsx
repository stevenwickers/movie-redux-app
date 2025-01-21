import { FC } from 'react'
import { MovieType } from '../../../models/movie-models'
import { ItemCardStyles, ItemUpperInfoStyles, BudgetTitleStyles, BudgetListItemAreaStyles, GenreCardStyles, LastRowStyles, LinkAreaStyles } from './ListingItem.styled'
import { useSelector } from 'react-redux'
import * as Selectors from '../../../selectors'

interface Props {
  item: MovieType
}

const Index: FC<Props> = ({ item }) => {
  const themeName = useSelector(Selectors.selectTheme)
  return (
    <ItemCardStyles themeName={themeName} id={'ItemCardStyles'}>
      <ItemUpperInfoStyles>
        <GenreCardStyles>
          <div>Genre</div>
          <div>
            <ul>
              {item.genre.map((item: string, index: number) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </GenreCardStyles>
        <GenreCardStyles>
          <div>Budget</div>
          <div>
            <ul>
              <li>
                <BudgetListItemAreaStyles>
                  <BudgetTitleStyles>Production Budget</BudgetTitleStyles>
                  <div>{item.productionBudget}</div>
                </BudgetListItemAreaStyles>
              </li>
              <li>
                <BudgetListItemAreaStyles>
                  <BudgetTitleStyles>Domestic Gross</BudgetTitleStyles>
                  <div>{item.domesticGross}</div>
                </BudgetListItemAreaStyles>
              </li>
              <li>
                <BudgetListItemAreaStyles>
                  <BudgetTitleStyles>Worldwide Gross</BudgetTitleStyles>
                  <div>{item.worldwideGross}</div>
                </BudgetListItemAreaStyles>
              </li>
            </ul>
          </div>
        </GenreCardStyles>
      </ItemUpperInfoStyles>
      <LastRowStyles>
        <LinkAreaStyles>
          link: <a href={item.link} target={'_blank'} rel="noreferrer">{item.link}</a>
        </LinkAreaStyles>
      </LastRowStyles>
    </ItemCardStyles>
  )
}

export default Index

