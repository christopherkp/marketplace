import './shared/css/Index.css'
import './shared/css/Header.css'
import App from './pages/App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>
)
