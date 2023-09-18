import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { StudentsProvider } from './context/StudentsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <StudentsProvider>
        <App />
      </StudentsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
