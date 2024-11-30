import { FormControl, TextField, TextFieldVariants } from '@mui/material';
import { useField } from 'formik';

interface InputProps {
    label: string;
    name: string;
    variant?: TextFieldVariants;
    placeholder?: string;
}

export const TextFieldForm = (props : InputProps) => {
    const [field, validate] = useField(props);
    return (
        <FormControl fullWidth>
            <TextField 
                disabled={ false } 
                error={ !!validate.error && validate.touched }                            
                helperText={ validate.touched && validate.error }
                label={props.label} 
                variant={props.variant}
                name={props.name} 
                value={ field.value } 
                placeholder={props.placeholder}
                onChange={field.onChange}
                onBlur={field.onBlur}
            />
        </FormControl>
    )
}
