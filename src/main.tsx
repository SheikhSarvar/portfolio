import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)

ReactDOM.createRoot(root).render(app)
