import { Dialog } from "@mui/material"
import { useState, useEffect, useRef } from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalProps } from "../interfaces";

export const Modal = ({ open, headerProps, actionsProps, children, handleCierre, maxWidth = 'xs', fullWidth = false } : ModalProps) => {
    const [isOpen, setIsOpen] = useState(open);
    const componenteCargado = useRef(false);
    
    useEffect(() =>  { 
        if( !open && !handleCierre && componenteCargado ) {
            handleInternalClose();
            return;
        }
        setIsOpen(open);
    }, [open]);
    
    useEffect(() => {
        if ( !componenteCargado.current ) {
            componenteCargado.current = true;
            return;
        }
        setIsOpen(open);        
    }, []);

    const handleInternalClose = () => handleCierre ? handleCierre() : setIsOpen(!isOpen);

    return (
        <ModalProvider
            value={{
                modal: { open: isOpen, headerProps, actionsProps },
                handleCierre: handleInternalClose
            }}
        >
            <Dialog open={ isOpen } onClose={ handleInternalClose } maxWidth={maxWidth} fullWidth={ fullWidth }>                              
                { children }          
            </Dialog>
        </ModalProvider>
    )
}
