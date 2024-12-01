import { Box, DialogContent, MenuItem } from "@mui/material"
import { Formik, Form  } from "formik"
import * as Yup from 'yup'
import { useContext } from "react"
import { Checkboxform, SelectForm, TextFieldForm } from "./InputsForm"
import { ActionsModal } from "./ActionsModal"
import { FormField, FormModalDinamicProps } from "../interfaces"
import { ContextModal } from "../context/ModalContext"

export const FormModalDinamic = (FormDinamicoProps : FormModalDinamicProps) => {

    const { modal:{ actionsProps } } = useContext(ContextModal);

    const { initialValues, formFields: form } = FormDinamicoProps;

    const renderInput = (form: FormField) => {
        switch (form.tipo) {
            case "textField":
                return (
                    <TextFieldForm
                        key={form.name}
                        label={form.label}
                        name={form.name}
                        variant={form.variant}
                        placeholder={form.placeholder}
                    />
                );
            case "select":
                return (
                    <SelectForm
                        key={form.name}
                        label={form.label}
                        name={form.name}
                        variant={form.variant}
                        placeholder={form.placeholder}
                    >
                        <MenuItem value={ 0 } disabled>Seleccionar</MenuItem>
                            {
                                form.options?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                ))
                            }
                    </SelectForm>
                );
            case "checkbox":
                return (
                    <Checkboxform
                        key={form.name}
                        label={form.label}
                        name={form.name}
                        placeholder={form.placeholder}
                    />
                );
            default:
                return null;
        }
    }

    const construirObjetoValidacion = (forms: FormField[]) => {
        const requiredFields: { [key: string]: any } = {}
        
        forms.forEach((form) => {
            let validacionesScheme = Yup.string();
            
            form.validations?.forEach((validacion) => {
                switch (validacion.type) {
                    case "required":
                        validacionesScheme = validacionesScheme.required(`El campo ${form.label} es requerido`);
                        break;
                    case "min":
                        validacionesScheme = validacionesScheme.min(validacion.value as number, `El campo ${form.label} debe tener al menos ${validacion.value} caracteres`);
                        break;
                    case "max":
                        validacionesScheme = validacionesScheme.max(validacion.value as number, `El campo ${form.label} debe tener como máximo ${validacion.value} caracteres`);
                        break;
                    case "notOneOf":
                        validacionesScheme = validacionesScheme.notOneOf(validacion.value as (string | Yup.Reference<string>)[], 'Debe seleccionar una opción');
                        break;
                    case "oneOf":
                        validacionesScheme = validacionesScheme.oneOf(validacion.value as (string | Yup.Reference<string>)[], `${form.label} debe ser aceptado`);
                        break;
                    case "email":
                        validacionesScheme = validacionesScheme.email('El email no es válido');
                        break;
                    default:
                        break;
                }
            });
            requiredFields[form.name] = validacionesScheme;
        });
        
        return Yup.object(requiredFields);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                actionsProps?.handleAccion && actionsProps.handleAccion(values);
            }}
            validationSchema={construirObjetoValidacion(form)}
        >
            {
                ({handleSubmit}) => (
                    <Form noValidate>                        
                        <DialogContent>
                            <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', gap:2 }}>
                                {
                                    form.map((form) => (
                                        renderInput(form)
                                    ))
                                }
                            </Box>
                        </DialogContent>
                        <ActionsModal handleAccion={handleSubmit}/>
                    </Form>
                )
            }
        </Formik>
    )
}
   