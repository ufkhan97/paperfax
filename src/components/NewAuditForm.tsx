import React, { useState } from 'react'
import { useWeb3ExecuteFunction } from 'react-moralis'

import { CONTRACT_ADDRESS, CONTRACT_ABI } from 'rinkeby'

interface NewAuditFormProps {
  paperfaxId: number
}

enum Verdict {
  GREEN = 0,
  YELLOW,
  RED
}

const NewAuditForm: React.FC<NewAuditFormProps> = ({ paperfaxId }) => {
  const [verdict, setVerdict] = useState(Verdict.GREEN)
  const handleVerdict = (e: any) => setVerdict(Number(e.target.value))
  console.log(verdict)

  const { error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: CONTRACT_ABI,
    contractAddress: CONTRACT_ADDRESS,
    functionName: 'createAudit',
    params: {
      _paperfaxId: paperfaxId,
      _verdict: `${verdict}`,
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
      <div onChange={handleVerdict}>
        <input type="radio" value="0" name="verdict" /> Green
        <input type="radio" value="1" name="verdict" /> Yellow
        <input type="radio" value="2" name="verdict" /> Red
      </div>
      <button onClick={() => fetch()} disabled={isFetching}>
        Create
      </button>
    </>
  )
}

export default NewAuditForm
