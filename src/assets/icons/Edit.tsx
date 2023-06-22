import { SVGProps } from "react";

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0F172A"
      d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      opacity={0.15}
    />
    <path
      fill="#0F172A"
      d="M13.709 2.877a3 3 0 0 1 4.242 0l1.172 1.172a3 3 0 0 1 0 4.242l-.416.416-5.414-5.414.416-.416ZM5.797 10.797a1.5 1.5 0 0 0-.296.562l-1.457 5.243a1.1 1.1 0 0 0 1.354 1.354l5.243-1.457a1.5 1.5 0 0 0 .562-.296l-5.406-5.406Z"
    />
    <path
      fill="#0F172A"
      d="m18.707 8.707-5.414-5.414L5.886 10.7a1.51 1.51 0 0 0-.089.097l5.406 5.406c.034-.028.066-.058.097-.089l7.407-7.407Z"
      opacity={0.15}
    />
  </svg>
);
export default EditIcon;
