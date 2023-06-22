import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  font: 700 16px Inter;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.main};
  padding: 8px 12px;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.mainActive};
  }

  &:active {
    transform: translateY(1px);
  }
`;
