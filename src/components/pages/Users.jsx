import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/UserCard";
import { UserContext } from "../provider/UserProvider";
import { userState } from "../recoil/userState";

const userlist = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ユースケ${val}`,
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNjQyOTU4NTM0&ixlib=rb-1.2.1&q=80&w=1080",
    mail: "11111@aaa.com",
    tel: "000-9999-9999",
    company: "ああああ会社",
    web: "aaaaaa.com"
  };
});

// const user = {
//   name: "ユースケ",
//   image:
//     "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNjQyOTU4NTM0&ixlib=rb-1.2.1&q=80&w=1080",
//   mail: "11111@aaa.com",
//   tel: "000-9999-9999",
//   company: "ああああ会社",
//   web: "aaaaaa.com"
// };

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // const { auth, setAuth } = useState(false);
  //onst { state } = useLocation();
  // const context = useContext(userContext);
  //console.log(context);

  // isAdmin = state ? state.isAdmin : false;
  const onClickAdmin = () => {
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    console.log(isAdmin);
    setUserInfo({ isAdmin: !isAdmin });
  };
  return (
    <>
      <SContainer>
        <h2>ユーザ一覧</h2>
        <SearchInput></SearchInput>
        <button onClick={onClickAdmin}>切り替え</button>
        <SUserArea>
          {userlist.map((user) => (
            <UserCard key={user.id} user={user}></UserCard>
          ))}
        </SUserArea>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SUserArea = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
