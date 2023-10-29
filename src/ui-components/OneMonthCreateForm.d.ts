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
export declare type OneMonthCreateFormInputValues = {
    name?: string;
    price?: number;
};
export declare type OneMonthCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OneMonthCreateFormOverridesProps = {
    OneMonthCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OneMonthCreateFormProps = React.PropsWithChildren<{
    overrides?: OneMonthCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OneMonthCreateFormInputValues) => OneMonthCreateFormInputValues;
    onSuccess?: (fields: OneMonthCreateFormInputValues) => void;
    onError?: (fields: OneMonthCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OneMonthCreateFormInputValues) => OneMonthCreateFormInputValues;
    onValidate?: OneMonthCreateFormValidationValues;
} & React.CSSProperties>;
export default function OneMonthCreateForm(props: OneMonthCreateFormProps): React.ReactElement;
