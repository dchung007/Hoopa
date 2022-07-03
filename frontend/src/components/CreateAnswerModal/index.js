import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAnswer from './CreateAnswer';
import './CreateAnswer.css';

function CreateAnswerModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-button' onClick={() => setShowModal(true)}>Add an answer</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAnswer hideModal={() => setShowModal(false)} />
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

export default CreateAnswerModal;
