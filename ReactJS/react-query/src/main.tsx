import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import './main.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { GetData, Home } from './Components/Home';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import { querClient } from './config/client';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <QueryClientProvider client={querClient} >
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path='home' element={<Home />} />
            <Route path='get-data' element={<GetData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  // </StrictMode >
)
