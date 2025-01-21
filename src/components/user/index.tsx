import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserContainerStyles, ContentStyles, SectionStyles, TitleSectionStyles, TitleStyles, InformationAreaStyles, TokenAreaStyles } from './User.styled'
import { IconSectionStyles, CancelIconStyles } from './User.styled.icons'
import { FavoriteSectionStyles, FavoriteTitleStyles, FavoriteItemStyles, BorderContainerStyles, BorderDivStyles, NoResultsStyles } from './User.styled.favorite'
import { SwitchAreaStyles, ButtonAreaStyles, ButtonStyles } from './User.styled.controls'
import ThemeSwitch from '../../controlls/ThemeSwitch'
import useIsAuthenticated from '../../hooks/useIsAuthenticated'
import Scrollbars from '../../controlls/Scrollbars'
import * as UserActions from '../../actions/user-actions'
import * as Selectors from '../../selectors'
import * as SystemActions from '../../actions/system-actions'

const User = () => {
  const dispatch = useDispatch()
  const token = useSelector(Selectors.selectToken)
  const theme = useSelector(Selectors.selectTheme)
  const currentTheme = useSelector(Selectors.selectTheme)
  const userPanelOpen = useSelector(Selectors.selectUserPanelState)
  const movies = useSelector(Selectors.selectMovies)
  const favorites = useSelector(Selectors.selectMovieFavorites)
  const authenticated = useIsAuthenticated()
  const [titles, setTitles] = useState<string[]>([])

  useEffect(() => {
    const titles: string[] = movies.filter(x => favorites.includes(x.id)).map(x => x.title)
    setTitles(titles)
  }, [favorites])

  const handleThemeSwitch = () => {
    dispatch(UserActions.toggleTheme())
  }

  const handleLogout = () => {
    dispatch(SystemActions.resetState())
    dispatch(SystemActions.logoutUser())
  }

  const displayUserPanel = () => {
    dispatch(SystemActions.toggleUserPanelState())
  }

  if(!authenticated) return null
  return (
    <UserContainerStyles className={userPanelOpen ? 'open': ''}>
      <IconSectionStyles>
        <CancelIconStyles onClick={displayUserPanel} />
      </IconSectionStyles>
      <TitleSectionStyles>
        User
      </TitleSectionStyles>
      <InformationAreaStyles id={'InformationAreaStyles'}>
        <SectionStyles>
          <TitleStyles id={'TitleStyles'}>Theme</TitleStyles>
          <SwitchAreaStyles>
            <ThemeSwitch theme={currentTheme} onChange={handleThemeSwitch}/>
          </SwitchAreaStyles>
        </SectionStyles>
        <BorderContainerStyles>
          <BorderDivStyles/>
        </BorderContainerStyles>
        <FavoriteSectionStyles>
          <FavoriteTitleStyles>
            Favorites
          </FavoriteTitleStyles>
          <ContentStyles>
            {titles.length > 0
              ? <Scrollbars controlHeight={150} themeName={theme}>
                {titles.map((title: string, index: number) => {
                  return <FavoriteItemStyles key={index}>{title}</FavoriteItemStyles>
                })}
              </Scrollbars>
              : <NoResultsStyles>None</NoResultsStyles>
            }
          </ContentStyles>
        </FavoriteSectionStyles>
        <BorderContainerStyles>
          <BorderDivStyles/>
        </BorderContainerStyles>
        <TokenAreaStyles>
          <TitleStyles>
            Token:
          </TitleStyles>
          <ContentStyles>
            {token}
          </ContentStyles>
        </TokenAreaStyles>
      </InformationAreaStyles>
      <ButtonAreaStyles>
        <ButtonStyles onClick={handleLogout}>Logout</ButtonStyles>
      </ButtonAreaStyles>
    </UserContainerStyles>
  )
}

export default User

