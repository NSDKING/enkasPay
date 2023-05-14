/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderRoomCreateFormInputValues = {};
export declare type OrderRoomCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderRoomCreateFormOverridesProps = {
    OrderRoomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type OrderRoomCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderRoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderRoomCreateFormInputValues) => OrderRoomCreateFormInputValues;
    onSuccess?: (fields: OrderRoomCreateFormInputValues) => void;
    onError?: (fields: OrderRoomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderRoomCreateFormInputValues) => OrderRoomCreateFormInputValues;
    onValidate?: OrderRoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderRoomCreateForm(props: OrderRoomCreateFormProps): React.ReactElement;
