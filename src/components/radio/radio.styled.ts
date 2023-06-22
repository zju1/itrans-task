import { styled } from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const RadioLabel = styled.label`
  font: 500 16px Inter;
  line-height: 24px;
  color: ${({ theme }) => theme.fieldLabel};

  &.error {
    color: ${({ theme }) => theme.error};
  }
`;

export const RadioCaption = styled.p`
  font: 400 14px Inter;
  line-height: 20px;
  color: ${({ theme }) => theme.fieldCaption};

  &.error {
    color: ${({ theme }) => theme.error};
  }
`;

export const RadioContent = styled.div<{
  cols: number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  padding: 4px;
  gap: 4px;
  border-radius: 8px;
  background: ${({ theme }) => theme.lightBack};
`;

export const RadioItem = styled.span`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-radius: 8px;
  padding: 4px 6px;
  cursor: pointer;
  transition: all 0.3s;

  &.active {
    background: #fff;
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
      0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }
`;
