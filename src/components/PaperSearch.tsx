import React, { useState } from 'react'

interface PaperSearchProps {
  goToRoute: (route: string) => void
}

const PaperSearch: React.FC<PaperSearchProps> = ({ goToRoute }) => {
  const [query, setQuery] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)
  const handleSubmit = () => goToRoute(query)

  return (
    <div className='not-sidebar paper-search'>
      <div className='search-wrapper'>
        <input value={query} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  )
}

export default PaperSearch
