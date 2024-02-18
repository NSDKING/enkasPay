/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Bilan } from "../models";
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
export declare type BilanUpdateFormInputValues = {
    ca?: string;
    expense?: string;
    solde?: string;
    date?: string;
    ActiveCustomer?: string;
};
export declare type BilanUpdateFormValidationValues = {
    ca?: ValidationFunction<string>;
    expense?: ValidationFunction<string>;
    solde?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    ActiveCustomer?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BilanUpdateFormOverridesProps = {
    BilanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ca?: PrimitiveOverrideProps<TextFieldProps>;
    expense?: PrimitiveOverrideProps<TextFieldProps>;
    solde?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    ActiveCustomer?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BilanUpdateFormProps = React.PropsWithChildren<{
    overrides?: BilanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bilan?: Bilan;
    onSubmit?: (fields: BilanUpdateFormInputValues) => BilanUpdateFormInputValues;
    onSuccess?: (fields: BilanUpdateFormInputValues) => void;
    onError?: (fields: BilanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BilanUpdateFormInputValues) => BilanUpdateFormInputValues;
    onValidate?: BilanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BilanUpdateForm(props: BilanUpdateFormProps): React.ReactElement;
