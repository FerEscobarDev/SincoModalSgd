import { Dialog } from "@mui/material"
import { createContext, useState, useEffect, useRef } from "react";
import { ActionsModalProps, HeaderModalProps } from "../interfaces";

export interface ModalPropiedades {
    open: boolean;
    headerProps?: HeaderModalProps;
    actionsProps?: ActionsModalProps;
    children?: React.ReactNode | React.ReactNode[];
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    fullWidth?: boolean;    
    handleCierre?: () => void;
}

export interface ModalContextProps {
    modal: ModalPropiedades;
    handleCierre?: () => void
}

export const ContextModal = createContext({} as ModalContextProps);
const { Provider } = ContextModal;

export const Modal = ({ open, headerProps, actionsProps, children, handleCierre, maxWidth = 'xs', fullWidth = false } : ModalPropiedades) => {
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
        <Provider
            value={{
                modal: { open: isOpen, headerProps, actionsProps },
                handleCierre: handleInternalClose
            }}
        >
            <Dialog open={ isOpen } onClose={ handleInternalClose } maxWidth={maxWidth} fullWidth={ fullWidth }>                              
                { children }          
            </Dialog>
        </Provider>
    )
}
