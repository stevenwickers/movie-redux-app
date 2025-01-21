import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageContainerStyles, ListingsContainerStyles, NoResultsStyles } from './listings.styled'
import { FilterAreaStyles, IconDivStyles, StarIconAreaStyles } from './listings.styled.icons'
import { DropDownCtrlStyles } from './listings.styled.dropdown'
import { SearchContainerStyles, SearchInputAreaStyles } from './listings.styled.search'
import { AccordionContainerStyles } from './listings.styled.accordian'
import { MovieType } from '../../models/movie-models'
import { getMovieGenres } from '../../utils/movie-utils'
import Accordion from '../../controlls/Accordion'
import ListingItem from './ListingItem'
import Scrollbars from '../../controlls/Scrollbars'
import Search from '../../controlls/Search'
import Dropdown, { DropdownType } from '../../controlls/Dropdown'
import ListingTitle from './ListingTitle'
import StarIconControl from '../../controlls/StarIconControl'
import * as Selectors from '../../selectors'
import * as MovieActions from '../../actions/movie-action'

const Listings = () => {
  const dispatch = useDispatch()
  const movies = useSelector(Selectors.selectMovies)
  const favorites = useSelector(Selectors.selectMovieFavorites)
  const selectedGenre = useSelector(Selectors.selectSelGenre)
  const theme = useSelector(Selectors.selectTheme)
  const [criteria, setCriteria] = useState<string>('')
  const [filtered, setFiltered] = useState<MovieType[]>([])
  const [dropdownList, setDropdownList] = useState<DropdownType[]>([])
  const [filterFavorites, setFilterFavorites] = useState<boolean>(false)

  useEffect(() => {
    const genreList:string[] = getMovieGenres(movies)
    const dropdown:DropdownType[] = []

    genreList.forEach((genre:string) => {
      dropdown.push({ value: genre, label: genre })
    })

    setDropdownList(dropdown)
  }, [movies])

  const createListings = (movies:MovieType[], themeName:string):any[] => {
    const movieListings: any[] = []

    movies.forEach((movie: MovieType) => {
      const movieItem = { ...movie }
      const isFavorite = favorites.includes(movieItem.id)

      console.log(themeName)
      const item = {
        key: movie.title,
        title: <ListingTitle key={movie.title} id={movie.id} title={movie.title} isFavorite={isFavorite} />,
        content: <ListingItem item={movieItem} />,
      }
      movieListings.push(item)
    })

    return movieListings
  }

  useEffect(() => {
    if(movies.length === 0) return

    let filteredMovies = [...movies]

    if(filterFavorites) {
      filteredMovies = filteredMovies.filter(x => favorites.includes(x.id))
    }

    if(criteria.length > 0) {
      filteredMovies = filteredMovies.filter(x => x.title.toLowerCase().includes(criteria.toLowerCase()))
    }

    if(selectedGenre !== '') {
      filteredMovies = filteredMovies.filter(x => x.genre.includes(selectedGenre))
    }

    const listings = createListings(filteredMovies, theme)

    setFiltered(listings)

  }, [movies, favorites, selectedGenre, criteria, filterFavorites])

  const handleSearchChange = (value:string) => {
    setCriteria(value)
  }

  const handleDropdownChange = (e: any) => {
    const value = e.target.value || ''
    dispatch(MovieActions.setSelectedGender(value))
  }

  const handleDisplayFavorites = () => {
    setFilterFavorites(!filterFavorites)
  }

  return (
    <PageContainerStyles>
      <ListingsContainerStyles id={'ListingsContainerStyles'}>
        <SearchContainerStyles id={'SearchContainerStyles'}>
          <DropDownCtrlStyles>
            <Dropdown
              options={dropdownList}
              selectedValue={selectedGenre}
              onChange={handleDropdownChange} />
          </DropDownCtrlStyles>
          <StarIconAreaStyles onClick={handleDisplayFavorites}>
            <FilterAreaStyles>
              Filter by Favorites
            </FilterAreaStyles>
            <IconDivStyles onClick={handleDisplayFavorites}>
              <StarIconControl isFavorite={filterFavorites} />
            </IconDivStyles>
          </StarIconAreaStyles>
          <SearchInputAreaStyles id={'SearchInputAreaStyles'}>
            <Search
              value={criteria}
              onChange={handleSearchChange}
              onCancel={() => handleSearchChange('')}
            />
          </SearchInputAreaStyles>
        </SearchContainerStyles>
        <AccordionContainerStyles id={'AccordingContainerStyles'}>
          {filtered.length > 0
            ? <Scrollbars themeName={theme} controlHeight={'85%'}>
              <Accordion items={filtered} />
            </Scrollbars>
            : <NoResultsStyles> No Results</NoResultsStyles>
          }
        </AccordionContainerStyles>
      </ListingsContainerStyles>
    </PageContainerStyles>
  )
}

export default Listings

