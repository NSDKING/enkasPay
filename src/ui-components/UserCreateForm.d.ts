/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserCreateFormInputValues = {
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
export declare type UserCreateFormValidationValues = {
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
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
