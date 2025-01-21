import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './components/ErrorPage'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import store from './store'
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
