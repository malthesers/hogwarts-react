import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StudentsProvider } from './context/StudentsContext.jsx'
import { MessagesProvider } from './context/MessagesContext.jsx'
import { HackingProvider } from './context/HackingContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <StudentsProvider>
        <HackingProvider>
          <MessagesProvider>
            <App />
          </MessagesProvider>
        </HackingProvider>
      </StudentsProvider>
    </ThemeProvider>
  </React.StrictMode>
)
