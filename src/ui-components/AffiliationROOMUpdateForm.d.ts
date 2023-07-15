/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AffiliationROOM } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AffiliationROOMUpdateFormInputValues = {};
export declare type AffiliationROOMUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AffiliationROOMUpdateFormOverridesProps = {
    AffiliationROOMUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AffiliationROOMUpdateFormProps = React.PropsWithChildren<{
    overrides?: AffiliationROOMUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    affiliationROOM?: AffiliationROOM;
    onSubmit?: (fields: AffiliationROOMUpdateFormInputValues) => AffiliationROOMUpdateFormInputValues;
    onSuccess?: (fields: AffiliationROOMUpdateFormInputValues) => void;
    onError?: (fields: AffiliationROOMUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AffiliationROOMUpdateFormInputValues) => AffiliationROOMUpdateFormInputValues;
    onValidate?: AffiliationROOMUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AffiliationROOMUpdateForm(props: AffiliationROOMUpdateFormProps): React.ReactElement;
