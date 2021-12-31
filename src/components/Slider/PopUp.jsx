import React, { useState } from 'react'
import styles from './Slider.module.css'
import Modal from 'react-modal';

export const PopUp = ({name}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
             <button className={styles.btnpopUp} onClick={()=> setIsOpen(true)}>{name}</button>
            <Modal 
            onRequestClose={()=> setIsOpen(false)}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={200}
            isOpen={isOpen}
            style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            content : { 
                position: 'absolute',
                top: '10em',
                left: '13em',
                right: '13em',
                bottom: '10em',
                border: '1px solid #ccc',
                overflow: 'auto', 
                borderRadius: '.5em',
                outline: 'none',
                background: 'rgba(0, 0, 0, 0.84)',
                padding: '1em',
            } 
            }}>
        <div className={styles.modal}>
            <h1>{name}</h1>
            <button className={styles.btnClose} onClick={() => setIsOpen(false)}>X</button>
        </div>
        </Modal>
        </div>
    )
}
