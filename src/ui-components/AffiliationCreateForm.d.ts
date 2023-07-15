/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AffiliationCreateFormInputValues = {
    ca?: number;
    code?: string;
    utilisations?: string;
};
export declare type AffiliationCreateFormValidationValues = {
    ca?: ValidationFunction<number>;
    code?: ValidationFunction<string>;
    utilisations?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AffiliationCreateFormOverridesProps = {
    AffiliationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ca?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    utilisations?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AffiliationCreateFormProps = React.PropsWithChildren<{
    overrides?: AffiliationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AffiliationCreateFormInputValues) => AffiliationCreateFormInputValues;
    onSuccess?: (fields: AffiliationCreateFormInputValues) => void;
    onError?: (fields: AffiliationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AffiliationCreateFormInputValues) => AffiliationCreateFormInputValues;
    onValidate?: AffiliationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AffiliationCreateForm(props: AffiliationCreateFormProps): React.ReactElement;
