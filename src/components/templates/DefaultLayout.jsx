import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer> copyLight @ 2022/01/24</Footer>
    </>
  );
};
