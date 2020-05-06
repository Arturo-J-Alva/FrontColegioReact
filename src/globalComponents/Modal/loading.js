import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container_loading">
        <div className="text-center">
          <div className="spinner-border text-primary h4" style={{width:'6rem',height:'6rem'}} role="status">
            <span className="sr-only ">Loading...</span>
          </div>
          <p className='text-white mt-2' >CARGANDO... </p>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;