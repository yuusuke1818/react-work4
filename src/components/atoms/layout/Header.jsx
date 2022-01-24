import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <SHeader>
        <SLink to="/">ホーム</SLink>
        <SLink to="/users">USERS</SLink>
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  color: #fff;
  text-align: center;
  background-color: teal;
  height: 20px;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 10px;
`;
