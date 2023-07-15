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
export declare type AffiliationContactCreateFormInputValues = {};
export declare type AffiliationContactCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AffiliationContactCreateFormOverridesProps = {
    AffiliationContactCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AffiliationContactCreateFormProps = React.PropsWithChildren<{
    overrides?: AffiliationContactCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AffiliationContactCreateFormInputValues) => AffiliationContactCreateFormInputValues;
    onSuccess?: (fields: AffiliationContactCreateFormInputValues) => void;
    onError?: (fields: AffiliationContactCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AffiliationContactCreateFormInputValues) => AffiliationContactCreateFormInputValues;
    onValidate?: AffiliationContactCreateFormValidationValues;
} & React.CSSProperties>;
export default function AffiliationContactCreateForm(props: AffiliationContactCreateFormProps): React.ReactElement;
