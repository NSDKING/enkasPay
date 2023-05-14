/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartRoomCreateFormInputValues = {
    number?: string;
};
export declare type CartRoomCreateFormValidationValues = {
    number?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartRoomCreateFormOverridesProps = {
    CartRoomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartRoomCreateFormProps = React.PropsWithChildren<{
    overrides?: CartRoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartRoomCreateFormInputValues) => CartRoomCreateFormInputValues;
    onSuccess?: (fields: CartRoomCreateFormInputValues) => void;
    onError?: (fields: CartRoomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartRoomCreateFormInputValues) => CartRoomCreateFormInputValues;
    onValidate?: CartRoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartRoomCreateForm(props: CartRoomCreateFormProps): React.ReactElement;
