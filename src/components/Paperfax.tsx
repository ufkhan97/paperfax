import React from "react";
import { useWeb3ExecuteFunction } from "react-moralis"

import { CONTRACT_ADDRESS, CONTRACT_ABI } from "rinkeby"

import NewPaperfaxButton from "components/NewPaperfaxButton"

interface PaperfaxProps {
  paper: string
}

const Paperfax: React.FC<PaperfaxProps> = ({ paper }) => {
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: CONTRACT_ABI,
    contractAddress: CONTRACT_ADDRESS,
    functionName: "uriToPaperfaxId",
    params: {
      "": paper,
    },
  });

  return (
    <div className="paperfax sidebar">
      {isLoading && <h1>Loading...</h1>}
      {error && <><h1>Error Fetching Data</h1><pre>{JSON.stringify(error, null, 2,)}</pre></>}
      <button onClick={() => fetch()} disabled={isFetching}>Fetch Data</button>
      {data && (
        Number(data)
          ? <h1>Paperfax found. ID: {data}</h1>
          : <><h1>No Paperfax found</h1><NewPaperfaxButton paper={paper} /></>
      )}
    </div>
  )
}

export default Paperfax
