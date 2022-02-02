import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UserContext } from "../provider/UserProvider";
import { userState } from "../recoil/userState";

axios.create({
  auth: {
    username: "yu-suke18m14",
    password: "340526"
  }
});

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGenerate = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        alert(error);
      });
    setUserInfo({ isAdmin: false });
    history.push("/users");
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
