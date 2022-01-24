import styled from "styled-components";

export const Footer = (props) => {
  const { children } = props;
  return (
    <>
      <SFooter>{children}</SFooter>
    </>
  );
};

const SFooter = styled.footer`
  color: #fff;
  text-align: center;
  background-color: teal;
  height: 20px;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
