import { useRef, useEffect, useState, ReactNode, ReactElement } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '@/components/atoms/Icons/CloseIcon'
import styles from './Modal.module.scss'
import { useModal } from '@/context/common/Modal/modalProvider'

interface IModalProps {
  children: ReactElement
}

export const Modal = ({ children }: IModalProps) => {
  const { mountedModal, setMountedModal } = useModal()
  const modalRef = useRef<Element | null>(null)

  useEffect(() => {
    modalRef.current = document.querySelector<HTMLElement>('#portal')
  }, [])

  return mountedModal && modalRef.current
    ? createPortal(
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.closeBtnArea}>
              <button
                onClick={() => setMountedModal(!mountedModal)}
                className={styles.closeBtn}
              >
                <CloseIcon />
              </button>
            </div>
            <div className={styles.modalContentDisplay}>{children}</div>
          </div>
        </div>,
        modalRef.current
      )
    : null
}

export default Modal
