/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Affiliation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AffiliationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ca: "",
    code: "",
    utilisations: "",
  };
  const [ca, setCa] = React.useState(initialValues.ca);
  const [code, setCode] = React.useState(initialValues.code);
  const [utilisations, setUtilisations] = React.useState(
    initialValues.utilisations
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCa(initialValues.ca);
    setCode(initialValues.code);
    setUtilisations(initialValues.utilisations);
    setErrors({});
  };
  const validations = {
    ca: [],
    code: [],
    utilisations: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ca,
          code,
          utilisations,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Affiliation(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AffiliationCreateForm")}
      {...rest}
    >
      <TextField
        label="Ca"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ca}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ca: value,
              code,
              utilisations,
            };
            const result = onChange(modelFields);
            value = result?.ca ?? value;
          }
          if (errors.ca?.hasError) {
            runValidationTasks("ca", value);
          }
          setCa(value);
        }}
        onBlur={() => runValidationTasks("ca", ca)}
        errorMessage={errors.ca?.errorMessage}
        hasError={errors.ca?.hasError}
        {...getOverrideProps(overrides, "ca")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca,
              code: value,
              utilisations,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <TextField
        label="Utilisations"
        isRequired={false}
        isReadOnly={false}
        value={utilisations}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca,
              code,
              utilisations: value,
            };
            const result = onChange(modelFields);
            value = result?.utilisations ?? value;
          }
          if (errors.utilisations?.hasError) {
            runValidationTasks("utilisations", value);
          }
          setUtilisations(value);
        }}
        onBlur={() => runValidationTasks("utilisations", utilisations)}
        errorMessage={errors.utilisations?.errorMessage}
        hasError={errors.utilisations?.hasError}
        {...getOverrideProps(overrides, "utilisations")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
