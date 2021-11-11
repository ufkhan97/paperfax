import React from 'react'

import Audit from 'components/Audit'

interface Paperfax {
  auditors: string[]
  verdicts: string[]
  ipfsHashes: string[]
  numMinorIssues: string[]
  numMajorIssues: string[]
  numRecommendations: string[]
  upvotes: string[]
  downvotes: string[]
}

interface AuditListProps {
  paperfax: Paperfax
}

const AuditList: React.FC<AuditListProps> = ({ paperfax }) => {
  const {
    auditors,
    verdicts,
    ipfsHashes,
    numMinorIssues,
    numMajorIssues,
    numRecommendations,
    upvotes,
    downvotes,
  } = paperfax
  const audits: JSX.Element[] = []
  for (let i = 0; i < verdicts.length; i++) {
    audits.push(<Audit
      key={i}
      auditor={auditors[i]}
      verdict={verdicts[i]}
      ipfsHash={ipfsHashes[i]}
      numMinorIssues={numMinorIssues[i]}
      numMajorIssues={numMajorIssues[i]}
      numRecommendations={numRecommendations[i]}
      upvotes={upvotes[i]}
      downvotes={downvotes[i]}
    />)
  }
  return <>{audits}</>
}

export default AuditList
