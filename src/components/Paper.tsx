import React from 'react'

interface PaperProps {
  paper: string
}

const Paper: React.FC<PaperProps> = ({ paper }) => <iframe className='not-sidebar' src={paper} />

export default Paper
