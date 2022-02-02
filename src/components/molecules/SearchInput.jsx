import { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  return (
    <>
      <Input placeholder="検索キーワード入力" />
      <PrimaryButton>検索</PrimaryButton>
    </>
  );
});
