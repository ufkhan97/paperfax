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

const NewAuditForm: React.FC<NewAuditFormProps> = ({ paperfaxId }) => {
  const [verdict, setVerdict] = useState(Verdict.GREEN)
  const [ipfsHash, setIpfsHash] = useState("0")
  const [minorIssues, setMinorIssues] = useState(0)
  const [majorIssues, setMajorIssues] = useState(0)
  const [recommendations, setRecommendations] = useState(0)
  const handleVerdict = (e: any) => setVerdict(Number(e.target.value))
  const handleIpfs = (e: React.ChangeEvent<HTMLInputElement>) => setIpfsHash(e.target.value)
  const handleMinorIssues = (e: React.ChangeEvent<HTMLInputElement>) => setMinorIssues(Number(e.target.value) || 0)
  const handleMajorIssues = (e: React.ChangeEvent<HTMLInputElement>) => setMajorIssues(Number(e.target.value) || 0)
  const handleRecommendations = (e: React.ChangeEvent<HTMLInputElement>) => setRecommendations(Number(e.target.value) || 0)
  console.log(verdict)
  console.log(ipfsHash)
  console.log(minorIssues)
  console.log(majorIssues)
  console.log(recommendations)

  const { error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: CONTRACT_ABI,
    contractAddress: CONTRACT_ADDRESS,
    functionName: 'createAudit',
    params: {
      _paperfaxId: paperfaxId,
      _verdict: `${verdict}`,
      _ipfsHash: `${ipfsHash}`,
      _numMinorIssues: `${minorIssues}`,
      _numMajorIssues: `${majorIssues}`,
      _numRecommendations: `${recommendations}`,
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    fetch()
    e.preventDefault()
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
        <label htmlFor="ipfs">IPFS Hash:</label>
        <input required id="ipfs" name="ipfs" onChange={handleIpfs} />
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
function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
   return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlmQTI3YWVlY0M2MDYyMzI2Y2ZCOEI0ODQ0ODhlZGUyZDEwNmMwQjUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzM4OTUxODk3ODQsIm5hbWUiOiJQYXBlcmZheCJ9.NWUYZJYzWSEUhQmDdQ4rUMtPgDoVoO83ypH73U_CASc'

  // In a real app, it's better to read an access token from an 
  // environement variable or other configuration that's kept outside of 
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
 // return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}

function getFiles() {
  const fileInput = document.querySelector('input[type="file"]')
  return fileInput.files
}

async function storeFiles(files) {
  const client = makeStorageClient()
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
  return cid
}
export default NewAuditForm
