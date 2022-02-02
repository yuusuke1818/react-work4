import "./styles.css";
import { Router } from "./rooter/Router";
import { UserProvider } from "./components/provider/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  // const userSample = axios.get().

  return (
    <div className="App">
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
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
