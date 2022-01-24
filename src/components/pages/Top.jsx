import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () => {
    history.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGenerate = () => {
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };

  return (
    <>
      <SContainer>
        <h2>TOPページです</h2>
        <SButton onClick={onClickGenerate}>一般</SButton>
        <br />
        <SButton onClick={onClickAdmin}>管理者</SButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SButton = styled.button`
  margin: 10px;
`;
