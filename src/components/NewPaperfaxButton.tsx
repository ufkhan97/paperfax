import React from 'react'
import { useWeb3ExecuteFunction } from 'react-moralis'

import { CONTRACT_ADDRESS, CONTRACT_ABI } from 'rinkeby'

interface NewPaperfaxButtonProps {
  paper: string
}

const NewPaperfaxButton: React.FC<NewPaperfaxButtonProps> = ({ paper }) => {
  const { error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: CONTRACT_ABI,
    contractAddress: CONTRACT_ADDRESS,
    functionName: 'initializePaperfax',
    params: {
      _paperURIs: [paper]
    }
  })

  return (
    <>
      {isLoading && <p>Creating New Paperfax...</p>}
      {error && (
        <>
          <h1>Error Creating Paperfax</h1>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
      <button onClick={() => fetch()} disabled={isFetching}>
        Create New Paperfax
      </button>
    </>
  )
}

export default NewPaperfaxButton
