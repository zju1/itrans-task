/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import {
  ContentWrapper,
  InputCaption,
  InputContent,
  InputLabel,
  InputPassword,
  InputWrapper,
} from "./input.styled";
import React, { useState } from "react";
import EyeIcon from "../../assets/icons/Eye";
import EyeOffIcon from "../../assets/icons/EyeOff";

export type InputProps = {
  label: string;
  caption?: string;
} & UseControllerProps<FieldValues, any> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue">;

export function Input(props: InputProps) {
  const { name, control, defaultValue, rules, shouldUnregister } = props;
  const [visible, setVisible] = useState(props.type === "password");

  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const className = fieldState.error ? "error" : "";

  return (
    <InputWrapper>
      <InputLabel className={className}> {props.label} </InputLabel>
      <ContentWrapper>
        <InputContent
          {...field}
          className={className}
          type={props.type === "password" && !visible ? "password" : undefined}
        />
        {props.type === "password" && (
          <InputPassword
            type="button"
            title={visible ? "Hide" : "Show"}
            onClick={() => setVisible(!visible)}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </InputPassword>
        )}
      </ContentWrapper>
      {(props.caption || fieldState.error) && (
        <InputCaption className={className}>
          {fieldState.error ? fieldState.error.message : props.caption}
        </InputCaption>
      )}
    </InputWrapper>
  );
}
