/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AffiliationContact } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AffiliationContactUpdateFormInputValues = {};
export declare type AffiliationContactUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AffiliationContactUpdateFormOverridesProps = {
    AffiliationContactUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AffiliationContactUpdateFormProps = React.PropsWithChildren<{
    overrides?: AffiliationContactUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    affiliationContact?: AffiliationContact;
    onSubmit?: (fields: AffiliationContactUpdateFormInputValues) => AffiliationContactUpdateFormInputValues;
    onSuccess?: (fields: AffiliationContactUpdateFormInputValues) => void;
    onError?: (fields: AffiliationContactUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AffiliationContactUpdateFormInputValues) => AffiliationContactUpdateFormInputValues;
    onValidate?: AffiliationContactUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AffiliationContactUpdateForm(props: AffiliationContactUpdateFormProps): React.ReactElement;
