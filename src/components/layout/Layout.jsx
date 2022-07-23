import { MainLayout } from "../../styles/general";
import { GlobalStyle } from "../../styles/variables";
import ActionsBar from "../ActionBars/ActionsBar";
import Editing from "../ActionBars/Editing";
import ImageGallery from "../modals/ImageGallery";
import Header from "./Header";
import MainBoard from "./MainBoard";

const Layout = () => {
  return (
    <>
      <MainLayout>
        <GlobalStyle />
        <Header />
        <ActionsBar />
        <MainBoard />
        <Editing />
      </MainLayout>
      <ImageGallery />
    </>
  );
};

export default Layout;
