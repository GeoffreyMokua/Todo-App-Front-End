import React, { useContext } from 'react'

export default function TaskOption() {

    const currentOption = useContext(OptionContext);
    const {show, handleOpen, handleClose} = useContext(ModalContext);

    const [catModalStatus, setCatModalStatus] = useState(false)

        const catModalOpen = () => {
            setCatModalStatus(true);
        };
        const catModalClose = () => {
            setCatModalStatus(false);
        };
        
  return (
    
  )
}
