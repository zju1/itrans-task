/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { mockCustomers } from "../../mock/mock-customers";
import {
  CustomerTable,
  CustomersTitle,
  CustomersWrapper,
  PageDivider,
  PageWrapper,
} from "./customers.styled";
import { CustomersForm } from "./form/CustomersForm";
import { CustomerHeader } from "./header/CustomerHeader";
import { CustomerRow } from "./row/CustomerRow";
import { initialValues } from "./customers.const";
import { random } from "../../utils/random";

export function Customers() {
  const [customers, setCustomers] = useState(mockCustomers);
  const [current, setCurrent] = useState<any>(initialValues);

  const removeItem = useCallback(
    (id: number) => {
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
      if (current && current.id && current.id === id) {
        setCurrent(initialValues);
      }
    },
    [current]
  );

  const handleSubmit = (data: any) => {
    if (data.id) {
      setCurrent(initialValues);
      setCustomers((prev) =>
        prev.map((elem) => (elem.id === data.id ? data : elem))
      );
    } else {
      setCustomers([
        ...customers,
        {
          ...data,
          avatar: `${random(1, 7)}.png`,
          id: customers.length + 1,
        },
      ]);
    }
  };

  return (
    <PageWrapper>
      <CustomersForm initialValues={current} onSubmit={handleSubmit} />
      <PageDivider />
      <CustomersWrapper>
        <CustomersTitle>Customers</CustomersTitle>
        <CustomerTable>
          <CustomerHeader />
          <tbody>
            {customers.map((customer) => (
              <CustomerRow
                {...customer}
                key={customer.id}
                onDelete={removeItem}
                onEdit={(id) =>
                  setCurrent(customers.find((prev) => prev.id === id) as any)
                }
              />
            ))}
          </tbody>
        </CustomerTable>
      </CustomersWrapper>
    </PageWrapper>
  );
}
