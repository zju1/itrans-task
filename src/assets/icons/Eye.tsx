import { SVGProps } from "react";

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0F172A"
      d="M12 4c-6.109 0-8.86 4.788-9.73 6.74a3.088 3.088 0 0 0 0 2.52C3.14 15.212 5.891 20 12 20c6.11 0 8.861-4.788 9.73-6.74a3.088 3.088 0 0 0 0-2.52C20.861 8.788 18.11 4 12 4Z"
      opacity={0.15}
    />
    <path
      fill="#0F172A"
      d="M10 12a2 2 0 0 0 1.739-2.989A3 3 0 1 1 9.01 11.74c.292.166.63.261.989.261Z"
    />
  </svg>
);
export default EyeIcon;
