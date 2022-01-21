import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
  border-radius: 10%;
  padding-left: 10px;
  outline: none;
`;
