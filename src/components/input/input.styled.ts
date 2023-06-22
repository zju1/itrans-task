import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  font: 500 16px Inter;
  line-height: 24px;
  color: ${({ theme }) => theme.fieldLabel};

  &.error {
    color: ${({ theme }) => theme.error};
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

export const InputContent = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.fieldColor};
  border-radius: 8px;
  height: 40px;
  font: 400 16px Inter;
  line-height: 24px;
  outline: none;
  padding: 8px 12px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.fieldActive};
  }

  &.error {
    outline: 1px solid ${({ theme }) => theme.error};
  }
`;

export const InputPassword = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const InputCaption = styled.p`
  font: 400 14px Inter;
  line-height: 20px;
  color: ${({ theme }) => theme.fieldCaption};

  &.error {
    color: ${({ theme }) => theme.error};
  }
`;
