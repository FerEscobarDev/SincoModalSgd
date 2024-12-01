import { ContextModal } from "../context/ModalContext";
import { FC } from "react";
import { ModalContextProps } from "../interfaces";

interface ModalProviderProps {
    children: React.ReactNode;
    value: ModalContextProps;
}

const { Provider } = ContextModal;

export const ModalProvider:FC<ModalProviderProps> = ({children, value:{modal , handleCierre}}) => {
    const { open, headerProps, actionsProps } = modal;
    return (
        <Provider 
            value={{
                modal: { open, headerProps, actionsProps },
                handleCierre: handleCierre
            }}
        >
            {children}
        </Provider>
    )
}
