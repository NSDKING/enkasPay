/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LikeRoom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LikeRoomUpdateFormInputValues = {};
export declare type LikeRoomUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LikeRoomUpdateFormOverridesProps = {
    LikeRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type LikeRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: LikeRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    likeRoom?: LikeRoom;
    onSubmit?: (fields: LikeRoomUpdateFormInputValues) => LikeRoomUpdateFormInputValues;
    onSuccess?: (fields: LikeRoomUpdateFormInputValues) => void;
    onError?: (fields: LikeRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikeRoomUpdateFormInputValues) => LikeRoomUpdateFormInputValues;
    onValidate?: LikeRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LikeRoomUpdateForm(props: LikeRoomUpdateFormProps): React.ReactElement;
