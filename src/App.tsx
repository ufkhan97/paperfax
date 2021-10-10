import React from "react"
import { MoralisProvider } from "react-moralis"

import Nav from "components/Nav"
import Paper from "components/Paper"
import Paperfax from "components/Paperfax"

const App = () => (
  <MoralisProvider
    appId="eYRfSIZaKuE2yL6aqlhyJQLp29oIgSMtHyIHSPbU"
    serverUrl="https://vhejc7duqagr.moralishost.com:2053/server"
  >
    <div className="app-container with-sidebar">
      <Nav />
      <div className="not-sidebar with-sidebar">
        <Paperfax />
        <Paper />
      </div>
    </div>
  </MoralisProvider>
)

export default App
