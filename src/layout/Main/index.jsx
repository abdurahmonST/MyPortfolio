import Navbar from "../Navbar";
import { MainWrapper } from "./mainStyle";

const MainLayout = (props) => {
  return (
    <MainWrapper>
      <Navbar />
      {props.children}
    </MainWrapper>
  );
};

export default MainLayout;
