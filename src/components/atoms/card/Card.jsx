import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SDiv>{children}</SDiv>;
};

const SDiv = styled.div`
  background-color: chocolate;
  padding: 50px;
  box-shadow: gray 5px 5px 10px 10px;
  border-radius: 10px;
`;
