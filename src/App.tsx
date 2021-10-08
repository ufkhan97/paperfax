import React from "react"
import { MoralisProvider } from "react-moralis"

import Nav from "components/Nav"

const App = () => (
  <MoralisProvider
    appId="eYRfSIZaKuE2yL6aqlhyJQLp29oIgSMtHyIHSPbU"
    serverUrl="https://vhejc7duqagr.moralishost.com:2053/server"
  >
    <Nav />
  </MoralisProvider>
)

export default App
