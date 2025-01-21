import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Navigate } from 'react-router-dom'
import { PageNameEnums } from '../../config/globals'
import { NavComponentStyles, NavRightStyles, NavLeftStyles, TooltipStyles } from './NavBar.styled'
import { GalleryIconStyles, ListingIconStyles, UserIconStyles } from './NavBar.styled.icons'
import { AppRoutes } from '../../config/globals'
import User from '../../components/user'
import styled from 'styled-components'
import * as Selectors from '../../selectors'
import * as SystemActions from '../../actions/system-actions'
import * as MovieActions from '../../actions/movie-action'

const NavBar = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(Selectors.selectAuthenticated)
  const selectedPage = useSelector(Selectors.selectCurrentPage)
  const userPanelVisible = useSelector(Selectors.selectUserPanelState)

  const iconClick = (id: string) => {
    dispatch(SystemActions.setCurrentPage(id))
    dispatch(MovieActions.setSelectedGender(''))
    return <Navigate to={`/${id}`} replace={true} />
  }

  const ToggleUserPanel = () => {
    dispatch(SystemActions.toggleUserPanelState())
  }

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.Login} replace={true} />
  }

  return (
    <NavComponentStyles>
      <NavLeftStyles>
        <NavLink to={AppRoutes.Gallery}>
          <GalleryIconStyles
            isSelected={selectedPage === PageNameEnums.Gallery}
            onClick={() => iconClick(PageNameEnums.Gallery)}
            data-tooltip-place='bottom'
            data-tooltip-id={'gallery'}
          />
          <TooltipStyles id={'gallery'}>
            <span>Gallery View</span>
          </TooltipStyles>
        </NavLink>
        <NavLink to={AppRoutes.Listings}>
          <ListingIconStyles
            isSelected={selectedPage === PageNameEnums.Listings}
            onClick={() => iconClick(PageNameEnums.Listings)}
            data-tooltip-place='bottom'
            data-tooltip-id={'listings'}
          />
          <TooltipStyles id={'listings'}>
            <span>Listing View</span>
          </TooltipStyles>
        </NavLink>
      </NavLeftStyles>
      <NavRightStyles id={'NavRightStyles'}>
        <div>
          <UserIconStyles
            id={'userIcon'}
            onClick={ToggleUserPanel}
            data-tooltip-place='bottom'
            data-tooltip-id={'user'}
          />
          <TooltipStyles id={'user'}>
            <span>User Panel</span>
          </TooltipStyles>
          <div>
            {userPanelVisible &&
              <UserContainerStyles >
                <User />
              </UserContainerStyles>
            }
          </div>
        </div>
      </NavRightStyles>
    </NavComponentStyles>
  )
}

export default NavBar

const UserContainerStyles = styled.div`
    position: absolute;
    width: 450px;
    right: 8px;
    top: 43px;
    transition: right 3s ease-in forwards;
`

