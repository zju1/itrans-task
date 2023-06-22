/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import {
  RadioContent,
  RadioItem,
  RadioLabel,
  RadioWrapper,
} from "./radio.styled";

export type InputProps = {
  label: string;
  options: { value: string; label: string }[];
} & UseControllerProps<FieldValues, any>;

export function Radio(props: InputProps) {
  const { name, control, defaultValue, rules, shouldUnregister } = props;

  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const className = fieldState.error ? "error" : "";

  return (
    <RadioWrapper>
      <RadioLabel className={className}> {props.label} </RadioLabel>
      <RadioContent cols={props.options.length} className={className}>
        {props.options.map((option) => (
          <RadioItem
            className={field.value === option.value ? "active" : ""}
            key={option.value}
            onClick={() =>
              field.onChange({ target: { value: option.value }, name })
            }
          >
            {option.label}
          </RadioItem>
        ))}
      </RadioContent>
    </RadioWrapper>
  );
}
