import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>健作</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
    </div>
  );
}
