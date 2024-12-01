import { FC, useContext } from 'react';
import { Box, DialogTitle, IconButton, Typography } from '@mui/material';
import {Close, Error} from '@mui/icons-material';
import { ColoresAlerta, HeaderModalProps, TipoAlerta } from '../interfaces';
import { ContextModal } from '../context/ModalContext';

export const HeaderModal:FC<HeaderModalProps> = ({imagen, titulo, tipoAlerta, headerAlerta = false}) => {

    const { modal:{headerProps}, handleCierre } = useContext( ContextModal);

    const imagenHeader = imagen || headerProps?.imagen || '';
    const tituloHeader = titulo || headerProps?.titulo || '';
    const headerAlertaHeader = headerAlerta || headerProps?.headerAlerta || false;
    const tipoAlertaHeader = tipoAlerta || headerProps?.tipoAlerta || 'info';

    const obtenerColores = (tipo:TipoAlerta): ColoresAlerta => {

        let colores: ColoresAlerta = {background:'', color:'inherit'};

        switch (tipo) {
            case 'info':
                colores = {background:'#C0E2EE', color:'info'};
                break;
            case 'danger':
                colores = {background:'#F1C7C7', color:'error'};
                break;
            default:
                colores = {background:'', color:'inherit'};
                break;
        }

        return colores;
    }

    const colores = obtenerColores(tipoAlertaHeader);

    const handleImagenIcono = (headerAlerta:boolean) => {
        return headerAlerta ? 
            (<Box sx={{width:36, height:36, borderRadius:8, backgroundColor:colores.background, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Error color={colores.color} sx={{fontSize:'25px'}}/>
            </Box>) : 
            (<img
                width={'46px'}
                height={'46px'}
                src={ imagenHeader }
                alt={ titulo }
            /> )
    }

    return (
        <DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2, width: '317px' }}>
                    { 
                        handleImagenIcono(headerAlertaHeader)
                    }
                    <Box sx={{ width: '270px' }}>
                        <Typography color="text.primary" variant='h6' component="h6">
                            { tituloHeader }
                        </Typography>
                    </Box>
                </Box>
                <Box width={'22px'} height={'22px'}>
                    <IconButton size="small" onClick={ handleCierre }>
                        <Close />
                    </IconButton>
                </Box>
            </Box>
        </DialogTitle>
    );
};
