import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-browser-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/react-portfolio/">
    <Routes>
      <Route path="*" element={<App />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
