import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface ActionsModalProps {
    nombreBoton?: string;
    sxActionButton?: SxProps<Theme>;
    colorButton?: "inherit" | "info" | "primary" | "secondary" | "success" | "error" | "warning";
    sxActionsContainer?: SxProps<Theme>;
    isLoading?: boolean;
    handleAccion?: (() => void) | (<T>(arg : T) => void);
}