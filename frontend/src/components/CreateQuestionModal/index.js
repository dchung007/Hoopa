// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateQuestion from './CreateQuestion';
import './CreateQuestion.css';

function CreateQuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-button' onClick={() => setShowModal(true)}>Create new Question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateQuestion setShowModal={() => setShowModal(true)} />
          <div className="modal-button">
            <button className="form-button" onClick={(e) => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default CreateQuestionModal;
