import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

try {
  const storedTheme = window.localStorage.getItem('portfolio-theme')
  const theme = storedTheme === 'dark' ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
} catch {
  document.documentElement.dataset.theme = 'light'
}

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)

ReactDOM.createRoot(root).render(app)
