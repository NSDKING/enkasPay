/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Sitchi } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SitchiCreateForm(props) {
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
    Nom: "",
    Prenom: "",
    numero: "",
    cite: "",
    precommender: false,
  };
  const [Nom, setNom] = React.useState(initialValues.Nom);
  const [Prenom, setPrenom] = React.useState(initialValues.Prenom);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [cite, setCite] = React.useState(initialValues.cite);
  const [precommender, setPrecommender] = React.useState(
    initialValues.precommender
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNom(initialValues.Nom);
    setPrenom(initialValues.Prenom);
    setNumero(initialValues.numero);
    setCite(initialValues.cite);
    setPrecommender(initialValues.precommender);
    setErrors({});
  };
  const validations = {
    Nom: [],
    Prenom: [],
    numero: [],
    cite: [],
    precommender: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
          Nom,
          Prenom,
          numero,
          cite,
          precommender,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Sitchi(modelFields));
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
      {...getOverrideProps(overrides, "SitchiCreateForm")}
      {...rest}
    >
      <TextField
        label="Nom"
        isRequired={false}
        isReadOnly={false}
        value={Nom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nom: value,
              Prenom,
              numero,
              cite,
              precommender,
            };
            const result = onChange(modelFields);
            value = result?.Nom ?? value;
          }
          if (errors.Nom?.hasError) {
            runValidationTasks("Nom", value);
          }
          setNom(value);
        }}
        onBlur={() => runValidationTasks("Nom", Nom)}
        errorMessage={errors.Nom?.errorMessage}
        hasError={errors.Nom?.hasError}
        {...getOverrideProps(overrides, "Nom")}
      ></TextField>
      <TextField
        label="Prenom"
        isRequired={false}
        isReadOnly={false}
        value={Prenom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nom,
              Prenom: value,
              numero,
              cite,
              precommender,
            };
            const result = onChange(modelFields);
            value = result?.Prenom ?? value;
          }
          if (errors.Prenom?.hasError) {
            runValidationTasks("Prenom", value);
          }
          setPrenom(value);
        }}
        onBlur={() => runValidationTasks("Prenom", Prenom)}
        errorMessage={errors.Prenom?.errorMessage}
        hasError={errors.Prenom?.hasError}
        {...getOverrideProps(overrides, "Prenom")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nom,
              Prenom,
              numero: value,
              cite,
              precommender,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <TextField
        label="Cite"
        isRequired={false}
        isReadOnly={false}
        value={cite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nom,
              Prenom,
              numero,
              cite: value,
              precommender,
            };
            const result = onChange(modelFields);
            value = result?.cite ?? value;
          }
          if (errors.cite?.hasError) {
            runValidationTasks("cite", value);
          }
          setCite(value);
        }}
        onBlur={() => runValidationTasks("cite", cite)}
        errorMessage={errors.cite?.errorMessage}
        hasError={errors.cite?.hasError}
        {...getOverrideProps(overrides, "cite")}
      ></TextField>
      <SwitchField
        label="Precommender"
        defaultChecked={false}
        isDisabled={false}
        isChecked={precommender}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Nom,
              Prenom,
              numero,
              cite,
              precommender: value,
            };
            const result = onChange(modelFields);
            value = result?.precommender ?? value;
          }
          if (errors.precommender?.hasError) {
            runValidationTasks("precommender", value);
          }
          setPrecommender(value);
        }}
        onBlur={() => runValidationTasks("precommender", precommender)}
        errorMessage={errors.precommender?.errorMessage}
        hasError={errors.precommender?.hasError}
        {...getOverrideProps(overrides, "precommender")}
      ></SwitchField>
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
