import React, { useState } from 'react'
import axios from 'axios'

const ModalA = () => {
  const [showModal, setShowModal] = useState(false)
  const [contacts, setContacts] = useState([])
  const handleShowModal = () => {
    fetchContactsFromAPI()
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const fetchContactsFromAPI = async () => {
    try {
      const response = await axios.get(
        'https://contact.mediusware.com/api/contacts/'
      )
      const data = response.data
      console.log(data.results)
      setContacts(data.results)
    } catch (error) {
      console.error('Error fetching contacts:', error)
    }
  }

  return (
    <div>
      <button
        className='btn btn-lg btn-outline-primary btn-A'
        type='button'
        onClick={handleShowModal}
      >
        All Contacts
      </button>

      <div
        className={`modal ${showModal ? 'show' : ''}`}
        tabIndex='-1'
        role='dialog'
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Modal Title</h5>
              <button
                type='button'
                className='close'
                onClick={handleCloseModal}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <ul>
                {contacts && contacts.map(contact => <li>{contact.phone}</li>)}
              </ul>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalA
