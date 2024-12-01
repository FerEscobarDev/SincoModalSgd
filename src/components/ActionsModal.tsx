import { FC, useContext } from 'react';
import { DialogActions, Button } from '@mui/material';
import { ActionsModalProps } from '../interfaces';
import { ContextModal } from '../context/ModalContext';

export const ActionsModal : FC<ActionsModalProps> = ({ nombreBoton, sxActionButton, colorButton, sxActionsContainer, isLoading, handleAccion }) => {

    const { modal:{ actionsProps }, handleCierre } = useContext(ContextModal);

    const nombreBotonActions = nombreBoton || actionsProps?.nombreBoton || 'Aceptar';
    const accionBotonAccion = handleAccion || actionsProps?.handleAccion || handleCierre;
    const sxButtonAction = sxActionButton || actionsProps?.sxActionButton || {};
    const colorButtonAction = colorButton || actionsProps?.colorButton;
    const sxContainer = sxActionsContainer || actionsProps?.sxActionsContainer || {};
    const isLoadingActions = isLoading || actionsProps?.isLoading || false;

    return (
        <DialogActions sx={sxContainer}>
            <Button disabled={isLoading} color='primary' size='small' onClick={handleCierre}>Cancelar</Button>
            <Button 
                type='submit'
                disabled={isLoadingActions} 
                variant='contained' 
                color={colorButtonAction}
                size='small' 
                sx={sxButtonAction}
                onClick={accionBotonAccion}
            >
                { nombreBotonActions }
            </Button>
        </DialogActions>
    );
};
