import {createContext, useState} from 'react'

export const ModalContext = createContext();

export default function ModalProvider({children}) {

    const [show, setShow] = useState(false)
    const handleOpen = () => {setShow(true);}
    const handleClose = () => {setShow(false);}

    return (
        <ModalContext.Provider
            value={{show: show,handleOpen: handleOpen, handleClose: handleClose}}>
            {children}
        </ModalContext.Provider>
    );
}

