export interface HeaderModalProps {
    imagen?: string;
    titulo?: string;
    headerAlerta?: boolean;
    tipoAlerta?: TipoAlerta;
}

export interface ColoresAlerta {
    background: string;
    color: 'error' | 'info' | 'inherit';
}

export type TipoAlerta = 'info' | 'danger';
