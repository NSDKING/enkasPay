/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Bilan } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BilanUpdateForm(props) {
  const {
    id: idProp,
    bilan: bilanModelProp,
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
    expense: "",
    solde: "",
    date: "",
    ActiveCustomer: "",
  };
  const [ca, setCa] = React.useState(initialValues.ca);
  const [expense, setExpense] = React.useState(initialValues.expense);
  const [solde, setSolde] = React.useState(initialValues.solde);
  const [date, setDate] = React.useState(initialValues.date);
  const [ActiveCustomer, setActiveCustomer] = React.useState(
    initialValues.ActiveCustomer
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bilanRecord
      ? { ...initialValues, ...bilanRecord }
      : initialValues;
    setCa(cleanValues.ca);
    setExpense(cleanValues.expense);
    setSolde(cleanValues.solde);
    setDate(cleanValues.date);
    setActiveCustomer(cleanValues.ActiveCustomer);
    setErrors({});
  };
  const [bilanRecord, setBilanRecord] = React.useState(bilanModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Bilan, idProp)
        : bilanModelProp;
      setBilanRecord(record);
    };
    queryData();
  }, [idProp, bilanModelProp]);
  React.useEffect(resetStateValues, [bilanRecord]);
  const validations = {
    ca: [],
    expense: [],
    solde: [],
    date: [],
    ActiveCustomer: [],
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
          ca,
          expense,
          solde,
          date,
          ActiveCustomer,
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
          await DataStore.save(
            Bilan.copyOf(bilanRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BilanUpdateForm")}
      {...rest}
    >
      <TextField
        label="Ca"
        isRequired={false}
        isReadOnly={false}
        value={ca}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca: value,
              expense,
              solde,
              date,
              ActiveCustomer,
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
        label="Expense"
        isRequired={false}
        isReadOnly={false}
        value={expense}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca,
              expense: value,
              solde,
              date,
              ActiveCustomer,
            };
            const result = onChange(modelFields);
            value = result?.expense ?? value;
          }
          if (errors.expense?.hasError) {
            runValidationTasks("expense", value);
          }
          setExpense(value);
        }}
        onBlur={() => runValidationTasks("expense", expense)}
        errorMessage={errors.expense?.errorMessage}
        hasError={errors.expense?.hasError}
        {...getOverrideProps(overrides, "expense")}
      ></TextField>
      <TextField
        label="Solde"
        isRequired={false}
        isReadOnly={false}
        value={solde}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca,
              expense,
              solde: value,
              date,
              ActiveCustomer,
            };
            const result = onChange(modelFields);
            value = result?.solde ?? value;
          }
          if (errors.solde?.hasError) {
            runValidationTasks("solde", value);
          }
          setSolde(value);
        }}
        onBlur={() => runValidationTasks("solde", solde)}
        errorMessage={errors.solde?.errorMessage}
        hasError={errors.solde?.hasError}
        {...getOverrideProps(overrides, "solde")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca,
              expense,
              solde,
              date: value,
              ActiveCustomer,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Active customer"
        isRequired={false}
        isReadOnly={false}
        value={ActiveCustomer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ca,
              expense,
              solde,
              date,
              ActiveCustomer: value,
            };
            const result = onChange(modelFields);
            value = result?.ActiveCustomer ?? value;
          }
          if (errors.ActiveCustomer?.hasError) {
            runValidationTasks("ActiveCustomer", value);
          }
          setActiveCustomer(value);
        }}
        onBlur={() => runValidationTasks("ActiveCustomer", ActiveCustomer)}
        errorMessage={errors.ActiveCustomer?.errorMessage}
        hasError={errors.ActiveCustomer?.hasError}
        {...getOverrideProps(overrides, "ActiveCustomer")}
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
          isDisabled={!(idProp || bilanModelProp)}
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
              !(idProp || bilanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
