/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useForm } from "react-hook-form";
import {
  CustomerFormContent,
  CustomerFormTitle,
  CustomerFormWrapper,
  FormGrid,
} from "./custome-form.styled";
import { Input } from "../../../components/input/Input";
import { Button } from "../../../components/button/Button";
import { Radio } from "../../../components/radio/Radio";
import { useEffect } from "react";

const required = {
  value: true,
  message: "This is required field",
};

const pattern = {
  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
  message: "Invalid email",
};

const minLength = {
  value: 8,
  message: "Password must contain 8 characters long",
};

const typeOptions = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Administrator",
    value: "admin",
  },
];

export function CustomersForm(props: {
  onSubmit: (data: any) => void;
  initialValues: any;
}) {
  const { control, handleSubmit, reset } = useForm<any>({
    defaultValues: props.initialValues,
  });

  useEffect(() => {
    reset(props.initialValues);
  }, [props.initialValues]);

  const onSubmit = handleSubmit((data: any) => {
    props.onSubmit(data);
    reset(props.initialValues);
  });

  return (
    <CustomerFormWrapper>
      <CustomerFormTitle> Add Customer </CustomerFormTitle>
      <CustomerFormContent onSubmit={onSubmit}>
        <FormGrid>
          <FormGrid columns={2}>
            <Input
              control={control}
              name="first_name"
              label="First name"
              rules={{ required }}
            />
            <Input
              control={control}
              name="last_name"
              label="Last name"
              rules={{ required }}
            />
          </FormGrid>
          <Input
            control={control}
            name="company"
            label="Company"
            rules={{ required }}
          />
          <Radio
            control={control}
            name="type"
            label="Status"
            options={typeOptions}
          />
          <Input
            control={control}
            name="email"
            label="Email"
            rules={{ required, pattern }}
          />
          {!props.initialValues.id && (
            <Input
              control={control}
              name="password"
              label="Password"
              type="password"
              caption="8+ characters"
              rules={{ required, minLength }}
            />
          )}
          <Button type="submit"> Save </Button>
        </FormGrid>
      </CustomerFormContent>
    </CustomerFormWrapper>
  );
}
