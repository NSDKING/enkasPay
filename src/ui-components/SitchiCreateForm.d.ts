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
export declare type SitchiCreateFormInputValues = {
    Nom?: string;
    Prenom?: string;
    numero?: string;
    cite?: string;
    precommender?: boolean;
};
export declare type SitchiCreateFormValidationValues = {
    Nom?: ValidationFunction<string>;
    Prenom?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    cite?: ValidationFunction<string>;
    precommender?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SitchiCreateFormOverridesProps = {
    SitchiCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nom?: PrimitiveOverrideProps<TextFieldProps>;
    Prenom?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    cite?: PrimitiveOverrideProps<TextFieldProps>;
    precommender?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SitchiCreateFormProps = React.PropsWithChildren<{
    overrides?: SitchiCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SitchiCreateFormInputValues) => SitchiCreateFormInputValues;
    onSuccess?: (fields: SitchiCreateFormInputValues) => void;
    onError?: (fields: SitchiCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SitchiCreateFormInputValues) => SitchiCreateFormInputValues;
    onValidate?: SitchiCreateFormValidationValues;
} & React.CSSProperties>;
export default function SitchiCreateForm(props: SitchiCreateFormProps): React.ReactElement;
