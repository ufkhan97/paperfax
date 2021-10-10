import React from 'react'
import { useWeb3ExecuteFunction } from 'react-moralis'

import { CONTRACT_ADDRESS, CONTRACT_ABI } from 'rinkeby'

interface AddAuditButtonProps {
  paperfaxId: number
}

const AddAuditButton: React.FC<AddAuditButtonProps> = ({ paperfaxId }) => {
  const { error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: CONTRACT_ABI,
    contractAddress: CONTRACT_ADDRESS,
    functionName: 'createAudit',
    params: {
      _paperfaxId: paperfaxId,
      _verdict: "0",
      _ipfsHash: "0",
      _numMinorIssues: "0",
      _numMajorIssues: "0",
      _numRecommendations: "0",
    }
  })

  return (
    <>
      {isLoading && <p>Creating New Audit...</p>}
      {error && (
        <>
          <h1>Error Creating Audit</h1>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
      <button onClick={() => fetch()} disabled={isFetching}>
        Create New Audit
      </button>
    </>
  )
}

export default AddAuditButton
