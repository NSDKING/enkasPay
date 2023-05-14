/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OrderRoom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderRoomUpdateFormInputValues = {};
export declare type OrderRoomUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderRoomUpdateFormOverridesProps = {
    OrderRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type OrderRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    orderRoom?: OrderRoom;
    onSubmit?: (fields: OrderRoomUpdateFormInputValues) => OrderRoomUpdateFormInputValues;
    onSuccess?: (fields: OrderRoomUpdateFormInputValues) => void;
    onError?: (fields: OrderRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderRoomUpdateFormInputValues) => OrderRoomUpdateFormInputValues;
    onValidate?: OrderRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderRoomUpdateForm(props: OrderRoomUpdateFormProps): React.ReactElement;
