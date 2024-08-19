import React, { createContext, useContext, useState } from 'react';
import ModalPortal from '../components/ui/ModalPortal';
import AlertModal from '../components/ui/AlertModal';

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalClose = () => setIsModalOpen(false);
    const modalOpen = () => setIsModalOpen(true);
    const [modalObj, setModalObj] = useState({});


    return <ModalContext.Provider value={{ isModalOpen, modalClose, modalOpen, setModalObj }}>
        {children}
        {
            isModalOpen && (
                <ModalPortal>
                    <AlertModal onClose={modalClose} modalObj={modalObj} closeCallback={modalObj.btnCallback}>
                        <h5>{modalObj.title || ''}</h5>
                        <p>{modalObj.text || ''}</p>
                    </AlertModal>
                </ModalPortal>
            )
        }
    </ModalContext.Provider>
}

export function useModalContext() {
    return useContext(ModalContext);
}
