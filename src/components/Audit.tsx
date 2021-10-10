import React from 'react'

interface AuditProps {
  auditor: string
  verdict: string
  ipfsHash: string
  numMinorIssues: string
  numMajorIssues: string
  numRecommendations: string
  upvotes: string
  downvotes: string
}

const Audit: React.FC<AuditProps> = (props) => {
  const {
    auditor,
    verdict,
    ipfsHash,
    numMinorIssues,
    numMajorIssues,
    numRecommendations,
    upvotes,
    downvotes,
  } = props

  return (
    <div className="audit">
      <div className={`audit-header verdict-${verdict}`}>
        Auditor: {auditor}
      </div>
      <div className="audit-content">
        {numMinorIssues} Minor Issues
        <br />
        {numMajorIssues} Major Issues
        <br />
        {numRecommendations} Recommendations
        <br />
        <a href={`https://ipfs.io/ipfs/${ipfsHash}`} target="_blank">
          View Full Contents on IPFS
        </a>
        <br />
        👍{upvotes} 👎{downvotes}
      </div>
    </div>
  )
}

export default Audit
