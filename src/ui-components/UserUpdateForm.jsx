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
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FamilyName: "",
    LastName: "",
    phoneNumber: "",
    city: "",
    mail: "",
    staff: false,
    birthdate: "",
    likeroomID: "",
  };
  const [FamilyName, setFamilyName] = React.useState(initialValues.FamilyName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [mail, setMail] = React.useState(initialValues.mail);
  const [staff, setStaff] = React.useState(initialValues.staff);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [likeroomID, setLikeroomID] = React.useState(initialValues.likeroomID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setFamilyName(cleanValues.FamilyName);
    setLastName(cleanValues.LastName);
    setPhoneNumber(cleanValues.phoneNumber);
    setCity(cleanValues.city);
    setMail(cleanValues.mail);
    setStaff(cleanValues.staff);
    setBirthdate(cleanValues.birthdate);
    setLikeroomID(cleanValues.likeroomID);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(user);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(User, idProp) : user;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, user]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    FamilyName: [],
    LastName: [],
    phoneNumber: [],
    city: [],
    mail: [{ type: "Email" }],
    staff: [],
    birthdate: [],
    likeroomID: [],
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
          FamilyName,
          LastName,
          phoneNumber,
          city,
          mail,
          staff,
          birthdate,
          likeroomID,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Family name"
        isRequired={false}
        isReadOnly={false}
        value={FamilyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName: value,
              LastName,
              phoneNumber,
              city,
              mail,
              staff,
              birthdate,
              likeroomID,
            };
            const result = onChange(modelFields);
            value = result?.FamilyName ?? value;
          }
          if (errors.FamilyName?.hasError) {
            runValidationTasks("FamilyName", value);
          }
          setFamilyName(value);
        }}
        onBlur={() => runValidationTasks("FamilyName", FamilyName)}
        errorMessage={errors.FamilyName?.errorMessage}
        hasError={errors.FamilyName?.hasError}
        {...getOverrideProps(overrides, "FamilyName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName: value,
              phoneNumber,
              city,
              mail,
              staff,
              birthdate,
              likeroomID,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              phoneNumber: value,
              city,
              mail,
              staff,
              birthdate,
              likeroomID,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              phoneNumber,
              city: value,
              mail,
              staff,
              birthdate,
              likeroomID,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Mail"
        isRequired={false}
        isReadOnly={false}
        value={mail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              phoneNumber,
              city,
              mail: value,
              staff,
              birthdate,
              likeroomID,
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
      <SwitchField
        label="Staff"
        defaultChecked={false}
        isDisabled={false}
        isChecked={staff}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              phoneNumber,
              city,
              mail,
              staff: value,
              birthdate,
              likeroomID,
            };
            const result = onChange(modelFields);
            value = result?.staff ?? value;
          }
          if (errors.staff?.hasError) {
            runValidationTasks("staff", value);
          }
          setStaff(value);
        }}
        onBlur={() => runValidationTasks("staff", staff)}
        errorMessage={errors.staff?.errorMessage}
        hasError={errors.staff?.hasError}
        {...getOverrideProps(overrides, "staff")}
      ></SwitchField>
      <TextField
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              phoneNumber,
              city,
              mail,
              staff,
              birthdate: value,
              likeroomID,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <TextField
        label="Likeroom id"
        isRequired={false}
        isReadOnly={false}
        value={likeroomID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              phoneNumber,
              city,
              mail,
              staff,
              birthdate,
              likeroomID: value,
            };
            const result = onChange(modelFields);
            value = result?.likeroomID ?? value;
          }
          if (errors.likeroomID?.hasError) {
            runValidationTasks("likeroomID", value);
          }
          setLikeroomID(value);
        }}
        onBlur={() => runValidationTasks("likeroomID", likeroomID)}
        errorMessage={errors.likeroomID?.errorMessage}
        hasError={errors.likeroomID?.hasError}
        {...getOverrideProps(overrides, "likeroomID")}
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
          isDisabled={!(idProp || user)}
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
              !(idProp || user) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
