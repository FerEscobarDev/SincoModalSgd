import { FormControl, FormHelperText, InputLabel, Select, TextFieldVariants } from "@mui/material";
import { useField } from "formik";

interface SelectProps {
    children: React.ReactNode;
    label: string;
    name: string;
    variant?: TextFieldVariants;
    placeholder?: string;
}

export const SelectForm = ({children, ...props} : SelectProps) => {
    const [field, validate] = useField(props);
    return (
        <FormControl error={ !!validate.error && validate.touched } fullWidth >
            <InputLabel id={`select-label-${field.name}`}>Select Form</InputLabel>
            <Select
                native={false} 
                disabled={ false } 
                variant={props.variant}
                value={ field.value } 
                name="select" 
                label={props.label}
                labelId={`select-label-${field.name}`}
                inputProps={{ 'aria-label': 'Without label', placeholder: props.placeholder }} 
                onChange={ field.onChange }
                onBlur={ field.onBlur }
            >
                {children}
                
            </Select>                            
            <FormHelperText>{ validate.touched && validate.error }</FormHelperText>
        </FormControl>
    )
}
