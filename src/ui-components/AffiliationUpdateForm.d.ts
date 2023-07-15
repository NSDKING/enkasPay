/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Affiliation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AffiliationUpdateFormInputValues = {
    ca?: number;
    code?: string;
    utilisations?: string;
};
export declare type AffiliationUpdateFormValidationValues = {
    ca?: ValidationFunction<number>;
    code?: ValidationFunction<string>;
    utilisations?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AffiliationUpdateFormOverridesProps = {
    AffiliationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ca?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    utilisations?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AffiliationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AffiliationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    affiliation?: Affiliation;
    onSubmit?: (fields: AffiliationUpdateFormInputValues) => AffiliationUpdateFormInputValues;
    onSuccess?: (fields: AffiliationUpdateFormInputValues) => void;
    onError?: (fields: AffiliationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AffiliationUpdateFormInputValues) => AffiliationUpdateFormInputValues;
    onValidate?: AffiliationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AffiliationUpdateForm(props: AffiliationUpdateFormProps): React.ReactElement;
