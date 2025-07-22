import FooterLayout from "../Footer";
import Navbar from "../Navbar";
import { MainWrapper } from "./mainStyle";

const MainLayout = (props) => {
  return (
    <MainWrapper>
      <Navbar />
      {props.children}
      <FooterLayout />
    </MainWrapper>
  );
};

export default MainLayout;
