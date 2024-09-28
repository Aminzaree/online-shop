import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import {NextUIProvider} from '@nextui-org/react'
=======
import { NextUIProvider } from '@nextui-org/react'
>>>>>>> origin/backend

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
<<<<<<< HEAD
      <main className="text-foreground bg-background">
=======
      <main className="dark text-foreground bg-background">
>>>>>>> origin/backend
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
)
