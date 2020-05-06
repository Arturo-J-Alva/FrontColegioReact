import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container_pago bg-light">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>

        <div className='text-center text-info'>
          <img src={props.img} alt={props.img} className='imgmodal'/>  
          <p><b>{props.children}</b></p>
          <button className='btn btn-outline-info' onClick={props.onClose} >ACEPTAR</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;