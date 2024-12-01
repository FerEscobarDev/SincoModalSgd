import { Box, Button, DialogContent, Typography } from '@mui/material'
import { useState } from 'react';
import { Dashboard } from '@mui/icons-material';
import { ActionsModal, FormModalDinamic, HeaderModal, Modal } from './components';
import { grey } from '@mui/material/colors';
import { FormModalDinamicProps } from './interfaces';
import { FormikValues } from 'formik';

function App() {

	const [ abrirModal, setAbrirModal ] = useState(false);
    const [ abrirModal2, setAbrirModal2 ] = useState(false);
    const [ abrirModal3, setAbrirModal3 ] = useState(false);

    const handleCierreModal = () => {
		setAbrirModal(!abrirModal);
        console.log("AbrirModal2",abrirModal2);
        if(abrirModal2) setAbrirModal2(false);
	};
    const handleCierreModal2 = () => setAbrirModal2(!abrirModal2);
    const handleCierreModal3 = () => setAbrirModal3(!abrirModal3);
	
	const Guardar = (arg? : FormikValues) => {
		handleCierreModal();
		console.log("Valores",arg)
	};

    const form : FormModalDinamicProps = {
        initialValues: {nombre:'',apellido:'',email:'',terms:false},
        formFields: [
            {name:'nombre', label:'Nombre', tipo:'textField', variant: "outlined", placeholder:'Ingrese su nombre', 
                validations:[
                    {type:'required'},
                    {type:'min', value:3},
                    {type:'max', value:20}
                ] },
            {name:'apellido', label:'Apellido', tipo:'textField', variant:'outlined', placeholder:'Ingrese su apellido', 
                validations:[
                    {type:'required'},
                    {type:'min', value:3},
                    {type:'max', value:20}
                ]
            },
            {name:'email', label:'Email', tipo:'textField', variant:'outlined', placeholder:'Ingrese su email', 
                validations:[
                    {type:'required'},
                    {type:'email'}
                ]
            },
            {name:'terms', label:'Acepta los términos y condiciones?', tipo:'checkbox', 
                validations:[
                    {type:'oneOf', value:['true']}
                ]
            }
        ]
    }

	return (
		<>
			<Box display="flex" justifyContent="center" alignItems="center" padding="20px" columnGap={10}>
                <Button variant='contained' color='primary' size='small' startIcon={<Dashboard/>} onClick={handleCierreModal}>Modal 1</Button>
                <Button variant='contained' color='primary' size='small' startIcon={<Dashboard/>} onClick={handleCierreModal2}>Modal 2</Button>
                <Button variant='contained' color='primary' size='small' startIcon={<Dashboard/>} onClick={handleCierreModal3}>Modal 3</Button>
            </Box>

			<Modal
                open={abrirModal} 
                headerProps={{
                    titulo:'Está Seguro?',
                    headerAlerta:true,
                    tipoAlerta:'danger'
                }}
                actionsProps={{
                    nombreBoton:'Aceptar',
                    colorButton:'error',
                    sxActionsContainer:{backgroundColor:grey[50]}
                }}
                maxWidth='xs'
            >
                <HeaderModal/>
                <DialogContent >
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'normal', gap:2}}>                        
                        <Typography variant='body2' color="text.primary">Este es el mensaje para confirmar</Typography>
                    </Box>
                </DialogContent>
                <ActionsModal/>
            </Modal>

            <Modal 
                open={abrirModal2} 
                headerProps={{
                    titulo:'Formulario',
                    imagen:'https://www.w3schools.com/howto/img_avatar.png',
                }}
                actionsProps={{
                    nombreBoton:'Aceptar',
                    colorButton:'primary',
                    handleAccion:Guardar
                }}
                maxWidth='xs'
            >
                <HeaderModal/>
                <FormModalDinamic initialValues={form.initialValues} formFields={form.formFields}/>
            </Modal>

			<Modal 
				open={abrirModal3}
				actionsProps={{
					nombreBoton:'Aceptar',
					colorButton:'primary',
					handleAccion:handleCierreModal3
				}}
				maxWidth='xs'
			>
				<DialogContent>
					<Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'normal', gap:2}}>
						<Typography variant='body2' color="text.primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et quibusdam iste dignissimos quam doloribus voluptatum dolore delectus, nihil excepturi labore distinctio consequatur, animi eaque est saepe quas repellendus dolor.</Typography>
					</Box>
				</DialogContent>
				<ActionsModal/>
			</Modal>
		</>
	)
}

export default App
