import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.css'

function Modal( { children }) {
  return ReactDOM.createPortal(
    <div className = {style.containerModal}>
      {children}
    </div>,
  
    document.getElementById('modal')
  );
}

export { Modal };