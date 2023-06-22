import { styled } from "styled-components";

export const CustomerFormWrapper = styled.div`
  padding: 40px;
  max-width: 512px;
  display: grid;
  gap: 40px;
  position: sticky;
  top: 0;
`;

export const CustomerFormTitle = styled.h1`
  font: 700 20px Inter;
  line-height: 24.2px;
`;

export const CustomerFormContent = styled.form``;

export const FormGrid = styled.div<{
  columns?: number;
}>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns},1fr)`};
  gap: 24px;
`;
