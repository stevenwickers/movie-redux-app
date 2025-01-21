import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieType } from '../../models/movie-models'
import { fetchMovies } from '../../actionQueries/movie-queries'
import { getUniqueCount } from '../../utils/array-utils'
import { KeyValueType } from '../../models/general-models'
import { useNavigate } from 'react-router-dom'
import { PageContainerStyles, GalleryContainerStyles, GalleryItemStyles, TitleStyles, WaterMarkStyles, CountAreaStyles, SpacerStyles } from './Gallery.styled'
import { PageNameEnums } from '../../config/globals'
import { AppRoutes } from '../../config/globals'
import * as Selectors from '../../selectors'
import * as MovieActions from '../../actions/movie-action'
import * as SystemActions from '../../actions/system-actions'

const Gallery = () => {
  const dispatch = useDispatch()
  const movies = useSelector(Selectors.selectMovies)
  const token = useSelector(Selectors.selectToken)
  const [genres, setGenres] = useState<string[]>([])
  const [genreCount, setGengreCount] = useState<KeyValueType>({})
  const navigate = useNavigate()

  useEffect(() => {
    if(token.length === 0 || movies.length > 0) return
    fetchMovies(dispatch, token)
  }, [token, movies])

  useEffect(() => {
    const movieCnt = movies.length
    if(movieCnt === 0) return
    let movieGenres:string[] = []

    movies.forEach((movie:MovieType) => {
      movieGenres = [...movieGenres, ...movie.genre]
    })

    const genreCount = getUniqueCount(movieGenres)
    setGengreCount(genreCount)

    const uniqueGenres = [...new Set(movieGenres)]
    setGenres(uniqueGenres.sort())

  }, [movies])

  const handleGenreClick = (genre:string) => {
    dispatch(SystemActions.setCurrentPage(PageNameEnums.Listings))
    dispatch(MovieActions.setSelectedGender(genre))

    navigate(AppRoutes.Listings)
  }

  return (
    <PageContainerStyles>
      <SpacerStyles />
      <GalleryContainerStyles id={'GalleryContainerStyles'}>
        {genres.map((genre: string, index: number) => {
          const cnt = genreCount[genre] || 0
          return (
            <div key={index} onClick={() => handleGenreClick(genre)}>
              <GalleryItemStyles id={'GalleryItemStyles'}>
                <WaterMarkStyles id={'WaterMarkStyles'}>
                  {genre}
                </WaterMarkStyles>
                <TitleStyles id={'TitleStyles'}>{genre}</TitleStyles>
                <CountAreaStyles>Count: {cnt}</CountAreaStyles>
              </GalleryItemStyles>
            </div>
          )
        })}
      </GalleryContainerStyles>
    </PageContainerStyles>
  )
}

export default Gallery
