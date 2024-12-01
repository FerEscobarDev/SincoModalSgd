import { ActionsModalProps } from "./ActionsModalProps";
import { HeaderModalProps } from "./HeaderModalProps";

export interface ModalProps {
    open: boolean;
    headerProps?: HeaderModalProps;
    actionsProps?: ActionsModalProps;
    children?: React.ReactNode | React.ReactNode[];
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    fullWidth?: boolean;    
    handleCierre?: () => void;
}

export interface ModalContextProps {
    modal: ModalProps;
    handleCierre?: () => void
}
