/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OneMonth } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OneMonthUpdateFormInputValues = {
    price?: number;
};
export declare type OneMonthUpdateFormValidationValues = {
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OneMonthUpdateFormOverridesProps = {
    OneMonthUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OneMonthUpdateFormProps = React.PropsWithChildren<{
    overrides?: OneMonthUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oneMonth?: OneMonth;
    onSubmit?: (fields: OneMonthUpdateFormInputValues) => OneMonthUpdateFormInputValues;
    onSuccess?: (fields: OneMonthUpdateFormInputValues) => void;
    onError?: (fields: OneMonthUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OneMonthUpdateFormInputValues) => OneMonthUpdateFormInputValues;
    onValidate?: OneMonthUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OneMonthUpdateForm(props: OneMonthUpdateFormProps): React.ReactElement;
