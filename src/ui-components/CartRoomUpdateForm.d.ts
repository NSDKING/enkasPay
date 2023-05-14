/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CartRoom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartRoomUpdateFormInputValues = {
    number?: string;
};
export declare type CartRoomUpdateFormValidationValues = {
    number?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartRoomUpdateFormOverridesProps = {
    CartRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cartRoom?: CartRoom;
    onSubmit?: (fields: CartRoomUpdateFormInputValues) => CartRoomUpdateFormInputValues;
    onSuccess?: (fields: CartRoomUpdateFormInputValues) => void;
    onError?: (fields: CartRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartRoomUpdateFormInputValues) => CartRoomUpdateFormInputValues;
    onValidate?: CartRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartRoomUpdateForm(props: CartRoomUpdateFormProps): React.ReactElement;
