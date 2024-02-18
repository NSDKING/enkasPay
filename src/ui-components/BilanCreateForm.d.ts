/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BilanCreateFormInputValues = {
    ca?: string;
    expense?: string;
    solde?: string;
    date?: string;
    ActiveCustomer?: string;
};
export declare type BilanCreateFormValidationValues = {
    ca?: ValidationFunction<string>;
    expense?: ValidationFunction<string>;
    solde?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    ActiveCustomer?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BilanCreateFormOverridesProps = {
    BilanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ca?: PrimitiveOverrideProps<TextFieldProps>;
    expense?: PrimitiveOverrideProps<TextFieldProps>;
    solde?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    ActiveCustomer?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BilanCreateFormProps = React.PropsWithChildren<{
    overrides?: BilanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BilanCreateFormInputValues) => BilanCreateFormInputValues;
    onSuccess?: (fields: BilanCreateFormInputValues) => void;
    onError?: (fields: BilanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BilanCreateFormInputValues) => BilanCreateFormInputValues;
    onValidate?: BilanCreateFormValidationValues;
} & React.CSSProperties>;
export default function BilanCreateForm(props: BilanCreateFormProps): React.ReactElement;
