import React, { useState } from 'react'
import { useWeb3ExecuteFunction } from 'react-moralis'
import { Web3Storage } from 'web3.storage'

import { CONTRACT_ADDRESS, CONTRACT_ABI } from 'rinkeby'

interface NewAuditFormProps {
  paperfaxId: number
}

enum Verdict {
  GREEN = 0,
  YELLOW,
  RED
}

const storageToken =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlmQTI3YWVlY0M2MDYyMzI2Y2ZCOEI0ODQ0ODhlZGUyZDEwNmMwQjUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzM4OTUxODk3ODQsIm5hbWUiOiJQYXBlcmZheCJ9.NWUYZJYzWSEUhQmDdQ4rUMtPgDoVoO83ypH73U_CASc'
const storageClient = new Web3Storage({ token: storageToken })

const NewAuditForm: React.FC<NewAuditFormProps> = ({ paperfaxId }) => {
  const [verdict, setVerdict] = useState(Verdict.GREEN)
  const [minorIssues, setMinorIssues] = useState(0)
  const [majorIssues, setMajorIssues] = useState(0)
  const [recommendations, setRecommendations] = useState(0)
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
  const handleVerdict = (e: any) => setVerdict(Number(e.target.value))
  const handleMinorIssues = (e: React.ChangeEvent<HTMLInputElement>) => setMinorIssues(Number(e.target.value) || 0)
  const handleMajorIssues = (e: React.ChangeEvent<HTMLInputElement>) => setMajorIssues(Number(e.target.value) || 0)
  const handleRecommendations = (e: React.ChangeEvent<HTMLInputElement>) => setRecommendations(Number(e.target.value) || 0)
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedFile(e.target.files)

  const { error, isFetching, isLoading, fetch: submitTx } = useWeb3ExecuteFunction({
    abi: CONTRACT_ABI,
    contractAddress: CONTRACT_ADDRESS,
    functionName: 'createAudit',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let cid = "0"
    if (selectedFile) {
      cid = await storageClient.put(selectedFile)
    }
    console.log(cid)
    submitTx({
      params: {
        params: {
          _paperfaxId: paperfaxId,
          _verdict: `${verdict}`,
          _numMinorIssues: `${minorIssues}`,
          _numMajorIssues: `${majorIssues}`,
          _numRecommendations: `${recommendations}`,
          _ipfsHash: cid
        }
      }
    })
  }

  return (
    <>
      {isLoading && <p>Creating New Audit...</p>}
      {error && (
        <>
          <h1>Error Creating Audit</h1>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <div onChange={handleVerdict}>
          <input type="radio" value="0" name="verdict" checked={verdict == Verdict.GREEN} /> Green
          <input type="radio" value="1" name="verdict" /> Yellow
          <input type="radio" value="2" name="verdict" /> Red
        </div>
        <br />
        <label htmlFor="upload">Upload to IPFS:</label>
        <input required type="file" id="upload" name="upload" onChange={handleUpload} />
        <br />
        <label htmlFor="minor-issues">Number of minor issues:</label>
        <input required type="number" min={0} id="minor-issues" name="minor-issues" onChange={handleMinorIssues} />
        <br />
        <label htmlFor="major-issues">Number of major issues:</label>
        <input required type="number" min={0} id="major-issues" name="major-issues" onChange={handleMajorIssues} />
        <br />
        <label htmlFor="recommendations">Number of recommendations:</label>
        <input required type="number" min={0} id="recommendations" name="recommendations" onChange={handleRecommendations} />
        <br />
        <button disabled={isFetching}>Create</button>
      </form>
    </>
  )
}

export default NewAuditForm
