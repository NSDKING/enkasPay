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
export declare type PaymentsCreateFormInputValues = {
    amounts?: number;
    sender_number?: string;
    sender_name?: string;
    transaction_id?: string;
    messages?: string;
};
export declare type PaymentsCreateFormValidationValues = {
    amounts?: ValidationFunction<number>;
    sender_number?: ValidationFunction<string>;
    sender_name?: ValidationFunction<string>;
    transaction_id?: ValidationFunction<string>;
    messages?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentsCreateFormOverridesProps = {
    PaymentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amounts?: PrimitiveOverrideProps<TextFieldProps>;
    sender_number?: PrimitiveOverrideProps<TextFieldProps>;
    sender_name?: PrimitiveOverrideProps<TextFieldProps>;
    transaction_id?: PrimitiveOverrideProps<TextFieldProps>;
    messages?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentsCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentsCreateFormInputValues) => PaymentsCreateFormInputValues;
    onSuccess?: (fields: PaymentsCreateFormInputValues) => void;
    onError?: (fields: PaymentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentsCreateFormInputValues) => PaymentsCreateFormInputValues;
    onValidate?: PaymentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentsCreateForm(props: PaymentsCreateFormProps): React.ReactElement;
