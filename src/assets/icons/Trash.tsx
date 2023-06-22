import { SVGProps } from "react";

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0F172A"
      d="M19 8H5v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8Z"
      opacity={0.15}
    />
    <path
      fill="#0F172A"
      d="M10 12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1ZM14 12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
    />
    <path
      fill="#0F172A"
      fillRule="evenodd"
      d="M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h3a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2h3Zm2-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default TrashIcon;
