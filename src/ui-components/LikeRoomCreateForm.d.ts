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
export declare type LikeRoomCreateFormInputValues = {};
export declare type LikeRoomCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LikeRoomCreateFormOverridesProps = {
    LikeRoomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type LikeRoomCreateFormProps = React.PropsWithChildren<{
    overrides?: LikeRoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LikeRoomCreateFormInputValues) => LikeRoomCreateFormInputValues;
    onSuccess?: (fields: LikeRoomCreateFormInputValues) => void;
    onError?: (fields: LikeRoomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikeRoomCreateFormInputValues) => LikeRoomCreateFormInputValues;
    onValidate?: LikeRoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function LikeRoomCreateForm(props: LikeRoomCreateFormProps): React.ReactElement;
