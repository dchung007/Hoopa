import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuestion from './EditQuestion';
import './EditQuestion.css';

function EditQuestionModal({ question }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-button modal-button-edit' onClick={() => setShowModal(true)}>Edit Question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditQuestion question={question} hideModal={() => setShowModal(false)} />
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

export default EditQuestionModal;
