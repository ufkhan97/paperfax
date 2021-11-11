import React, { useState, useCallback } from 'react'
import { MoralisProvider } from 'react-moralis'

import Nav from 'components/Nav'
import Paper from 'components/Paper'
import Paperfax from 'components/Paperfax'
import PaperSearch from 'components/PaperSearch'

const App = () => {
  const path = decodeURIComponent(window.location.pathname.trim())
  const [paper, setPaper] = useState(path[0] === '/' ? path.substr(1) : path)
  // const [paperfaxCache, setPaperfaxCache] = useState({})

  const goToRoute = useCallback(
    (route: string) => {
      window.history.pushState({}, '', `/${encodeURIComponent(route)}`)
      setPaper(route)
    },
    [setPaper]
  )

  return (
    <MoralisProvider
      appId='eYRfSIZaKuE2yL6aqlhyJQLp29oIgSMtHyIHSPbU'
      serverUrl='https://vhejc7duqagr.moralishost.com:2053/server'
    >
      <div className='with-sidebar app-container'>
        <Nav goToRoute={goToRoute} />
        {paper?.replace('/', '') ? (
          <div className='not-sidebar with-sidebar content'>
            <Paperfax paper={paper} />
            <Paper paper={paper} />
          </div>
        ) : (
          <PaperSearch goToRoute={goToRoute} />
        )}
      </div>
    </MoralisProvider>
  )
}

export default App
