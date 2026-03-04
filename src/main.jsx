import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create Query Client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='bg-[#EAEDED] urbanist-font'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
