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
export declare type BuyRoomCreateFormInputValues = {};
export declare type BuyRoomCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuyRoomCreateFormOverridesProps = {
    BuyRoomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BuyRoomCreateFormProps = React.PropsWithChildren<{
    overrides?: BuyRoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BuyRoomCreateFormInputValues) => BuyRoomCreateFormInputValues;
    onSuccess?: (fields: BuyRoomCreateFormInputValues) => void;
    onError?: (fields: BuyRoomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BuyRoomCreateFormInputValues) => BuyRoomCreateFormInputValues;
    onValidate?: BuyRoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function BuyRoomCreateForm(props: BuyRoomCreateFormProps): React.ReactElement;
