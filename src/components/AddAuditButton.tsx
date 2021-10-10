import React, { useEffect, useState } from 'react'

import NewAuditForm from 'components/NewAuditForm'

interface AddAuditButtonProps {
  paperfaxId: number
}

const AddAuditButton: React.FC<AddAuditButtonProps> = ({ paperfaxId }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setModalOpen(true)
  const handleClickClose = (e: React.MouseEvent) => {
    setModalOpen(false)
    e.stopPropagation()
  }

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)
    return () => {
      document.removeEventListener('keydown', handleEsc, false)
    }
  }, [])

  return (
    <>
      <div className={`modal-container ${modalOpen ? 'open' : ''}`} onClick={handleClickClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <a className="x-button" onClick={handleClickClose}>
            ×
          </a>
          <NewAuditForm paperfaxId={paperfaxId} />
        </div>
      </div>
      <button onClick={handleOpen}>
        Create New Audit
      </button>
    </>
  )
}

export default AddAuditButton
