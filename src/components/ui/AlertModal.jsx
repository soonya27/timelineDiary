import React from 'react';
import Button from './Button';
// import styles from './AlertModal.module.css';


export default function AlertModal({ onClose, children, closeCallback }) {
    return (
        <section onClick={async (e) => {
            //section(bg 영역 클릭시)
            if (e.target === e.currentTarget) {
                closeCallback ? await closeCallback().then(onClose)
                    : onClose();
            }
        }}
        >
            {/* container */}
            <div >
                {children}
                <Button onClick={async () => {
                    closeCallback ? await closeCallback().then(onClose)
                        : onClose();
                }}>
                    확인
                </Button>
            </div>
        </section>
    );
}