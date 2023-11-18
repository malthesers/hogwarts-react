import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StudentsProvider } from './context/StudentsContext'
import { MessagesProvider } from './context/MessagesContext'
import { HackingProvider } from './context/HackingContext'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <HackingProvider>
        <StudentsProvider>
          <MessagesProvider>
            <App />
          </MessagesProvider>
        </StudentsProvider>
      </HackingProvider>
    </ThemeProvider>
  </React.StrictMode>
)
