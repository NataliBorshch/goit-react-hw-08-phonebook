import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalKeyDown);
  }

  handleModalKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleModalOverlay = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleModalOverlay}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
