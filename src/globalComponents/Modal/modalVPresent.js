import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container_VPresent bg-light">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        <div className='video-container text-center embed-responsive embed-responsive-16by9 mt-3'>
          {props.children}
        </div>
      </div>
      <div style={{position:'relative',top:'10rem'}} className='text-center'>
        <button className='btn btn-primary' onClick={props.onClose} >CERRAR</button>
      </div>

    </div>,
    document.getElementById('modal')
  );
}

export default Modal;