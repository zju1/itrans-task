export interface Customer {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  type: "admin" | "user";
}

export const mockCustomers: Customer[] = [
  {
    id: 1,
    avatar: "/1.png",
    first_name: "Jane ",
    last_name: "Cooper",
    company: "Apple",
    email: "jessica.hanson@example.com",
    type: "admin",
  },
  {
    id: 2,
    avatar: "/2.png",
    first_name: "Guy ",
    last_name: "Hawkins",
    company: "IBM",
    email: "bill.sanders@example.com",
    type: "admin",
  },
  {
    id: 3,
    avatar: "/3.png",
    first_name: "Jenny ",
    last_name: "Wilson",
    company: "Gillette",
    email: "georgia.young@example.com",
    type: "user",
  },
  {
    id: 4,
    avatar: "/4.png",
    first_name: "Robert ",
    last_name: "Fox",
    company: "Ferrari",
    email: "sara.cruz@example.com",
    type: "admin",
  },
  {
    id: 5,
    avatar: "/5.png",
    first_name: "Cody ",
    last_name: "Fisher",
    company: "Starbucks",
    email: "jackson.graham@example.com",
    type: "admin",
  },
  {
    id: 6,
    avatar: "/6.png",
    first_name: "Albert ",
    last_name: "Flores",
    company: "Nintendo",
    email: "tanya.hill@example.com",
    type: "user",
  },
  {
    id: 7,
    avatar: "/7.png",
    first_name: "Cameron ",
    last_name: "Williamson",
    company: "General Electric",
    email: "michael.mitc@example.com",
    type: "user",
  },
];
