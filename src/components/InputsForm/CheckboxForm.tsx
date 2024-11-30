import { Checkbox, FormControl, FormControlLabel, FormHelperText } from "@mui/material";
import { useField } from "formik";

interface CheckboxProps {
    label: string;
    name: string;
    placeholder?: string;
}

export const Checkboxform = (props : CheckboxProps) => {
    
    const [field, validate] = useField(props);
    
    return (
        <FormControl error={ !!validate.error && validate.touched } fullWidth>
            <FormControlLabel 
                sx={{paddingLeft:1}}
                control={
                    <Checkbox                                             
                        onChange={ field.onChange } 
                        onBlur={ field.onBlur }
                        checked={ field.value } 
                        disabled={false} 
                        name={props.name} 
                        color="primary" 
                        size="medium" />
                } 
                labelPlacement="end" 
                label={props.label}
            />
            <FormHelperText>{ validate.touched && validate.error }</FormHelperText>
        </FormControl>
    );
}