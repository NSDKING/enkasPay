/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cart } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartUpdateFormInputValues = {
    number?: number;
    price?: number;
    nb_month?: string;
};
export declare type CartUpdateFormValidationValues = {
    number?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    nb_month?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartUpdateFormOverridesProps = {
    CartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    nb_month?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cart?: Cart;
    onSubmit?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onSuccess?: (fields: CartUpdateFormInputValues) => void;
    onError?: (fields: CartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onValidate?: CartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartUpdateForm(props: CartUpdateFormProps): React.ReactElement;
