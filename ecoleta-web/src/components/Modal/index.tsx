import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface ModalProps {
  modalRef: string;
  className: string;
}

const Modal: React.FC<ModalProps> = props => {
  const { className, modalRef } = props;

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <p>Meu modal!</p>
    </div>
  );
};

export default Modal;
