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
export declare type AffiliationROOMCreateFormInputValues = {};
export declare type AffiliationROOMCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AffiliationROOMCreateFormOverridesProps = {
    AffiliationROOMCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AffiliationROOMCreateFormProps = React.PropsWithChildren<{
    overrides?: AffiliationROOMCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AffiliationROOMCreateFormInputValues) => AffiliationROOMCreateFormInputValues;
    onSuccess?: (fields: AffiliationROOMCreateFormInputValues) => void;
    onError?: (fields: AffiliationROOMCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AffiliationROOMCreateFormInputValues) => AffiliationROOMCreateFormInputValues;
    onValidate?: AffiliationROOMCreateFormValidationValues;
} & React.CSSProperties>;
export default function AffiliationROOMCreateForm(props: AffiliationROOMCreateFormProps): React.ReactElement;
