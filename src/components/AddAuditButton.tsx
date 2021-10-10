import React, { useState } from 'react'

import NewAuditForm from 'components/NewAuditForm'

interface AddAuditButtonProps {
  paperfaxId: number
}

const AddAuditButton: React.FC<AddAuditButtonProps> = ({ paperfaxId }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setModalOpen(true)
  const handleClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
    setModalOpen(false)
    e.stopPropagation()
  }

  return (
    <>
      <div className={`modal-container ${modalOpen ? 'open' : ''}`} onClick={handleClickClose}>
        <div className="modal" onClick={e => e.stopPropagation}>
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
