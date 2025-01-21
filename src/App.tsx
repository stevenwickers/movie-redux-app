import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themes } from './assets/themes'
import { AppRoutes } from './config/globals'
import Home from './components'
import Gallery from './components/Gallery'
import Listings from './components/Listings'
import Login from './components/Login'
import GlobalStyles from './assets/GlobalStyles'
import NavBar from './controlls/NavBar'
import ProtectedRoutes from './ProtetectRoutes'
import * as Selectors from './selectors'

const App = () => {
  const theme = useSelector(Selectors.selectTheme)
  const isAuthenticated = useSelector(Selectors.selectAuthenticated)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path={AppRoutes.Login} element={<Login /> } />
        <Route
          path="/"
          element={
            <ProtectedRoutes isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path={AppRoutes.Gallery}
          element={
            <ProtectedRoutes isAuthenticated={isAuthenticated}>
              <Gallery />
            </ProtectedRoutes>
          } />
        <Route
          path={AppRoutes.Listings}
          element={
            <ProtectedRoutes isAuthenticated={isAuthenticated}>
              <Listings />
            </ProtectedRoutes>
          } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
