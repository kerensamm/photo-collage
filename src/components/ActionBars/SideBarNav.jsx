import { ReactComponent as Image } from "../../assets/images/image.svg";
import { ReactComponent as Layout } from "../../assets/images/layout.svg";
import { ReactComponent as Sliders } from "../../assets/images/sliders.svg";
import { SideNav } from "../../styles/general";

const SideBarNav = () => {
  return (
    <SideNav>
      <Image />
      <Sliders />
      <Layout />
    </SideNav>
  );
};

export default SideBarNav;
