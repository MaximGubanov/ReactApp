import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/HomePage'
import { About } from './pages/AboutPage'
import { PageNotFound } from './pages/NotFounPage'
import { LearnedPage } from './pages/LernedPage'
import { RepetitionPage } from './pages/RepetitionPage'
import { AllWords } from './pages/WordsPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='all-words' element={<AllWords/>} />
          <Route path='learned-words' element={<LearnedPage />} />
          <Route path='repeat-words' element={<RepetitionPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
