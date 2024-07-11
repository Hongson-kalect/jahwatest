import styled from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid #aaa;
  background-color: white;
  /* border-radius */
  th {
    color: white;
    font-size: 16px;
    font-weight: 400;
    background: #706edf !important;
    border-radius: 0 !important;
    padding: 4px !important;
    text-align: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  td {
    color: #4a4a4a;
    border-bottom: 0.1px solid #ddd;
    padding: 2px 6px !important;
    font-size: 15px;

    &:first-child {
      /* border: none; */
      text-align: center;
    }
    &:nth-child(2) {
      text-align: center;
    }
  }
  tr {
    transition: all 0.3s linear;
    &:first-child td {
      border-top: 1px solid gray;
    }

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;
