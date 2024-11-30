import { TextFieldVariants } from "@mui/material";
import { FormikValues } from "formik";
import * as Yup from 'yup';

export interface FormModalDinamicProps {
    initialValues: FormikValues;
    formFields: FormField[];
}

export type inputTipo = "textField" | "select" | "checkbox";

export interface validation {
    type: "required" | "min" | "max" | "notOneOf" | "oneOf" | "email";
    value?: (string | Yup.Reference<string>)[] | number | Yup.Reference<number>;
}

export interface Options {
    value: string | number;
    label: string;
}

export interface FormField {
    tipo: inputTipo;
    label: string;
    name: string;
    variant?: TextFieldVariants;
    placeholder?: string;
    validations?: validation[];
    options?: Options[];
}
