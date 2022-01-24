import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/UserCard";
import { axios } from "axios";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./rooter/Router";
import { UserProvider } from "./components/provider/UserProvider";
import { useContext } from "react";

export default function App() {
  // const userSample = axios.get().

  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>
      {/* <BrowserRouter>
        <DefaultLayout>
          <PrimaryButton>テスト</PrimaryButton>
          <SecondaryButton>健作</SecondaryButton>
          <br />
          <SearchInput></SearchInput>
          <UserCard user={user}></UserCard>
        </DefaultLayout>
      </BrowserRouter> */}
    </div>
  );
}
