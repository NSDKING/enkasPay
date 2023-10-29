/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { User } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserUpdateFormInputValues = {
    FamilyName?: string;
    LastName?: string;
    city?: string;
    mail?: string;
    birthdate?: string;
    staff?: boolean;
    phoneNumber?: string;
    statut?: string;
    goodcount?: number;
    pbcount?: number;
    solde?: string;
};
export declare type UserUpdateFormValidationValues = {
    FamilyName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    mail?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    staff?: ValidationFunction<boolean>;
    phoneNumber?: ValidationFunction<string>;
    statut?: ValidationFunction<string>;
    goodcount?: ValidationFunction<number>;
    pbcount?: ValidationFunction<number>;
    solde?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FamilyName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    mail?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    staff?: PrimitiveOverrideProps<SwitchFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    statut?: PrimitiveOverrideProps<TextFieldProps>;
    goodcount?: PrimitiveOverrideProps<TextFieldProps>;
    pbcount?: PrimitiveOverrideProps<TextFieldProps>;
    solde?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
