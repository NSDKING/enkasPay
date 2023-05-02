/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AccountUpdateForm(props) {
  const {
    id: idProp,
    account,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    mail: "",
    passe: "",
    profil: "",
    endDateAccount: "",
    pin: "",
    numero: "",
    endDateProfil: "",
  };
  const [mail, setMail] = React.useState(initialValues.mail);
  const [passe, setPasse] = React.useState(initialValues.passe);
  const [profil, setProfil] = React.useState(initialValues.profil);
  const [endDateAccount, setEndDateAccount] = React.useState(
    initialValues.endDateAccount
  );
  const [pin, setPin] = React.useState(initialValues.pin);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [endDateProfil, setEndDateProfil] = React.useState(
    initialValues.endDateProfil
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountRecord
      ? { ...initialValues, ...accountRecord }
      : initialValues;
    setMail(cleanValues.mail);
    setPasse(cleanValues.passe);
    setProfil(cleanValues.profil);
    setEndDateAccount(cleanValues.endDateAccount);
    setPin(cleanValues.pin);
    setNumero(cleanValues.numero);
    setEndDateProfil(cleanValues.endDateProfil);
    setErrors({});
  };
  const [accountRecord, setAccountRecord] = React.useState(account);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Account, idProp) : account;
      setAccountRecord(record);
    };
    queryData();
  }, [idProp, account]);
  React.useEffect(resetStateValues, [accountRecord]);
  const validations = {
    mail: [{ type: "Email" }],
    passe: [],
    profil: [],
    endDateAccount: [],
    pin: [],
    numero: [],
    endDateProfil: [],
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
          mail,
          passe,
          profil,
          endDateAccount,
          pin,
          numero,
          endDateProfil,
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
          await DataStore.save(
            Account.copyOf(accountRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Mail"
        isRequired={false}
        isReadOnly={false}
        value={mail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mail: value,
              passe,
              profil,
              endDateAccount,
              pin,
              numero,
              endDateProfil,
            };
            const result = onChange(modelFields);
            value = result?.mail ?? value;
          }
          if (errors.mail?.hasError) {
            runValidationTasks("mail", value);
          }
          setMail(value);
        }}
        onBlur={() => runValidationTasks("mail", mail)}
        errorMessage={errors.mail?.errorMessage}
        hasError={errors.mail?.hasError}
        {...getOverrideProps(overrides, "mail")}
      ></TextField>
      <TextField
        label="Passe"
        isRequired={false}
        isReadOnly={false}
        value={passe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mail,
              passe: value,
              profil,
              endDateAccount,
              pin,
              numero,
              endDateProfil,
            };
            const result = onChange(modelFields);
            value = result?.passe ?? value;
          }
          if (errors.passe?.hasError) {
            runValidationTasks("passe", value);
          }
          setPasse(value);
        }}
        onBlur={() => runValidationTasks("passe", passe)}
        errorMessage={errors.passe?.errorMessage}
        hasError={errors.passe?.hasError}
        {...getOverrideProps(overrides, "passe")}
      ></TextField>
      <TextField
        label="Profil"
        isRequired={false}
        isReadOnly={false}
        value={profil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mail,
              passe,
              profil: value,
              endDateAccount,
              pin,
              numero,
              endDateProfil,
            };
            const result = onChange(modelFields);
            value = result?.profil ?? value;
          }
          if (errors.profil?.hasError) {
            runValidationTasks("profil", value);
          }
          setProfil(value);
        }}
        onBlur={() => runValidationTasks("profil", profil)}
        errorMessage={errors.profil?.errorMessage}
        hasError={errors.profil?.hasError}
        {...getOverrideProps(overrides, "profil")}
      ></TextField>
      <TextField
        label="End date account"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDateAccount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mail,
              passe,
              profil,
              endDateAccount: value,
              pin,
              numero,
              endDateProfil,
            };
            const result = onChange(modelFields);
            value = result?.endDateAccount ?? value;
          }
          if (errors.endDateAccount?.hasError) {
            runValidationTasks("endDateAccount", value);
          }
          setEndDateAccount(value);
        }}
        onBlur={() => runValidationTasks("endDateAccount", endDateAccount)}
        errorMessage={errors.endDateAccount?.errorMessage}
        hasError={errors.endDateAccount?.hasError}
        {...getOverrideProps(overrides, "endDateAccount")}
      ></TextField>
      <TextField
        label="Pin"
        isRequired={false}
        isReadOnly={false}
        value={pin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mail,
              passe,
              profil,
              endDateAccount,
              pin: value,
              numero,
              endDateProfil,
            };
            const result = onChange(modelFields);
            value = result?.pin ?? value;
          }
          if (errors.pin?.hasError) {
            runValidationTasks("pin", value);
          }
          setPin(value);
        }}
        onBlur={() => runValidationTasks("pin", pin)}
        errorMessage={errors.pin?.errorMessage}
        hasError={errors.pin?.hasError}
        {...getOverrideProps(overrides, "pin")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numero}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              mail,
              passe,
              profil,
              endDateAccount,
              pin,
              numero: value,
              endDateProfil,
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
        label="End date profil"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDateProfil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mail,
              passe,
              profil,
              endDateAccount,
              pin,
              numero,
              endDateProfil: value,
            };
            const result = onChange(modelFields);
            value = result?.endDateProfil ?? value;
          }
          if (errors.endDateProfil?.hasError) {
            runValidationTasks("endDateProfil", value);
          }
          setEndDateProfil(value);
        }}
        onBlur={() => runValidationTasks("endDateProfil", endDateProfil)}
        errorMessage={errors.endDateProfil?.errorMessage}
        hasError={errors.endDateProfil?.hasError}
        {...getOverrideProps(overrides, "endDateProfil")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || account)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || account) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
