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
import { Payments } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PaymentsCreateForm(props) {
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
    amounts: "",
    sender_number: "",
    sender_name: "",
    transaction_id: "",
    messages: "",
    used: false,
  };
  const [amounts, setAmounts] = React.useState(initialValues.amounts);
  const [sender_number, setSender_number] = React.useState(
    initialValues.sender_number
  );
  const [sender_name, setSender_name] = React.useState(
    initialValues.sender_name
  );
  const [transaction_id, setTransaction_id] = React.useState(
    initialValues.transaction_id
  );
  const [messages, setMessages] = React.useState(initialValues.messages);
  const [used, setUsed] = React.useState(initialValues.used);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAmounts(initialValues.amounts);
    setSender_number(initialValues.sender_number);
    setSender_name(initialValues.sender_name);
    setTransaction_id(initialValues.transaction_id);
    setMessages(initialValues.messages);
    setUsed(initialValues.used);
    setErrors({});
  };
  const validations = {
    amounts: [],
    sender_number: [],
    sender_name: [],
    transaction_id: [],
    messages: [],
    used: [],
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
          amounts,
          sender_number,
          sender_name,
          transaction_id,
          messages,
          used,
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
          await DataStore.save(new Payments(modelFields));
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
      {...getOverrideProps(overrides, "PaymentsCreateForm")}
      {...rest}
    >
      <TextField
        label="Amounts"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amounts}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              amounts: value,
              sender_number,
              sender_name,
              transaction_id,
              messages,
              used,
            };
            const result = onChange(modelFields);
            value = result?.amounts ?? value;
          }
          if (errors.amounts?.hasError) {
            runValidationTasks("amounts", value);
          }
          setAmounts(value);
        }}
        onBlur={() => runValidationTasks("amounts", amounts)}
        errorMessage={errors.amounts?.errorMessage}
        hasError={errors.amounts?.hasError}
        {...getOverrideProps(overrides, "amounts")}
      ></TextField>
      <TextField
        label="Sender number"
        isRequired={false}
        isReadOnly={false}
        value={sender_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              amounts,
              sender_number: value,
              sender_name,
              transaction_id,
              messages,
              used,
            };
            const result = onChange(modelFields);
            value = result?.sender_number ?? value;
          }
          if (errors.sender_number?.hasError) {
            runValidationTasks("sender_number", value);
          }
          setSender_number(value);
        }}
        onBlur={() => runValidationTasks("sender_number", sender_number)}
        errorMessage={errors.sender_number?.errorMessage}
        hasError={errors.sender_number?.hasError}
        {...getOverrideProps(overrides, "sender_number")}
      ></TextField>
      <TextField
        label="Sender name"
        isRequired={false}
        isReadOnly={false}
        value={sender_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              amounts,
              sender_number,
              sender_name: value,
              transaction_id,
              messages,
              used,
            };
            const result = onChange(modelFields);
            value = result?.sender_name ?? value;
          }
          if (errors.sender_name?.hasError) {
            runValidationTasks("sender_name", value);
          }
          setSender_name(value);
        }}
        onBlur={() => runValidationTasks("sender_name", sender_name)}
        errorMessage={errors.sender_name?.errorMessage}
        hasError={errors.sender_name?.hasError}
        {...getOverrideProps(overrides, "sender_name")}
      ></TextField>
      <TextField
        label="Transaction id"
        isRequired={false}
        isReadOnly={false}
        value={transaction_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              amounts,
              sender_number,
              sender_name,
              transaction_id: value,
              messages,
              used,
            };
            const result = onChange(modelFields);
            value = result?.transaction_id ?? value;
          }
          if (errors.transaction_id?.hasError) {
            runValidationTasks("transaction_id", value);
          }
          setTransaction_id(value);
        }}
        onBlur={() => runValidationTasks("transaction_id", transaction_id)}
        errorMessage={errors.transaction_id?.errorMessage}
        hasError={errors.transaction_id?.hasError}
        {...getOverrideProps(overrides, "transaction_id")}
      ></TextField>
      <TextField
        label="Messages"
        isRequired={false}
        isReadOnly={false}
        value={messages}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              amounts,
              sender_number,
              sender_name,
              transaction_id,
              messages: value,
              used,
            };
            const result = onChange(modelFields);
            value = result?.messages ?? value;
          }
          if (errors.messages?.hasError) {
            runValidationTasks("messages", value);
          }
          setMessages(value);
        }}
        onBlur={() => runValidationTasks("messages", messages)}
        errorMessage={errors.messages?.errorMessage}
        hasError={errors.messages?.hasError}
        {...getOverrideProps(overrides, "messages")}
      ></TextField>
      <SwitchField
        label="Used"
        defaultChecked={false}
        isDisabled={false}
        isChecked={used}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              amounts,
              sender_number,
              sender_name,
              transaction_id,
              messages,
              used: value,
            };
            const result = onChange(modelFields);
            value = result?.used ?? value;
          }
          if (errors.used?.hasError) {
            runValidationTasks("used", value);
          }
          setUsed(value);
        }}
        onBlur={() => runValidationTasks("used", used)}
        errorMessage={errors.used?.errorMessage}
        hasError={errors.used?.hasError}
        {...getOverrideProps(overrides, "used")}
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
