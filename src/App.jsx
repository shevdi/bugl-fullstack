import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Blog } from './Blog.jsx'
const queryClient = new QueryClient()

export function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
      <button onClick={() => setIsOpen(!isOpen)}>{`${
        isOpen ? 'Close' : 'Open'
      } the devtools panel`}</button>
      {isOpen && <ReactQueryDevtools onClose={() => setIsOpen(false)} />}
    </QueryClientProvider>
  )
}
