import { styled } from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1px 1fr;
  min-height: 100vh;
  align-items: flex-start;
`;

export const PageDivider = styled.div`
  background-color: ${({ theme }) => theme.border};
  height: 100%;
`;

export const CustomersWrapper = styled.div`
  padding: 40px;
  display: grid;
  gap: 40px;
`;

export const CustomersTitle = styled.h1`
  font: 700 20px Inter;
  line-height: 24.2px;
`;

export const CustomerTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    th {
      color: ${({ theme }) => theme.fieldCaption};
      font-size: 16px;
      font-family: Inter;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      padding: 4px 0 16px 0;

      &:nth-of-type(4) {
        width: 72px;
      }

      &:nth-of-type(5) {
        width: 76px;
      }
    }
  }

  tbody {
    td {
      font-size: 16px;
      font-family: Inter;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.fieldColor};
      padding: 4px 0 16px 0;

      .user {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;

        img {
          width: 32px;
          height: 32px;
          padding: 4px;
          border-radius: 8px;
          background: ${({ theme }) => theme.lightBack};
        }
      }

      .adminBadge {
        width: 50px;
        height: 24px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.border};

        &[data-active="admin"] {
          background-color: ${({ theme }) => theme.main};
        }
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .actionBtn {
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        width: 24px;
        height: 24;
        border-radius: 100px !important;

        &:hover {
          background: ${({ theme }) => theme.border};
        }

        &:active {
          transform: scale(1.1);
        }
      }
    }
  }
`;
