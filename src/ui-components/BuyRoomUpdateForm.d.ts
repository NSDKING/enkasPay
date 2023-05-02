/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BuyRoom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BuyRoomUpdateFormInputValues = {};
export declare type BuyRoomUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuyRoomUpdateFormOverridesProps = {
    BuyRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BuyRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: BuyRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    buyRoom?: BuyRoom;
    onSubmit?: (fields: BuyRoomUpdateFormInputValues) => BuyRoomUpdateFormInputValues;
    onSuccess?: (fields: BuyRoomUpdateFormInputValues) => void;
    onError?: (fields: BuyRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BuyRoomUpdateFormInputValues) => BuyRoomUpdateFormInputValues;
    onValidate?: BuyRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BuyRoomUpdateForm(props: BuyRoomUpdateFormProps): React.ReactElement;
