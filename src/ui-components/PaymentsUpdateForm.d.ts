/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Payments } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PaymentsUpdateFormInputValues = {
    amounts?: number;
    sender_number?: string;
    sender_name?: string;
    transaction_id?: string;
    messages?: string;
};
export declare type PaymentsUpdateFormValidationValues = {
    amounts?: ValidationFunction<number>;
    sender_number?: ValidationFunction<string>;
    sender_name?: ValidationFunction<string>;
    transaction_id?: ValidationFunction<string>;
    messages?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentsUpdateFormOverridesProps = {
    PaymentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amounts?: PrimitiveOverrideProps<TextFieldProps>;
    sender_number?: PrimitiveOverrideProps<TextFieldProps>;
    sender_name?: PrimitiveOverrideProps<TextFieldProps>;
    transaction_id?: PrimitiveOverrideProps<TextFieldProps>;
    messages?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    payments?: Payments;
    onSubmit?: (fields: PaymentsUpdateFormInputValues) => PaymentsUpdateFormInputValues;
    onSuccess?: (fields: PaymentsUpdateFormInputValues) => void;
    onError?: (fields: PaymentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentsUpdateFormInputValues) => PaymentsUpdateFormInputValues;
    onValidate?: PaymentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentsUpdateForm(props: PaymentsUpdateFormProps): React.ReactElement;
