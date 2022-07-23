import { useEffect, useState } from "react";
import { getSampleImages } from "../../api/general";
import { ReactComponent as Layout } from "../../assets/images/layout.svg";
import { ReactComponent as Trash } from "../../assets/images/trash.svg";
import { Action, Button } from "../../styles/buttons";
import { ActionsMenu } from "../../styles/general";
import ImageGrid from "../grids/ImageGrid";
import SideBarNav from "./SideBarNav";

const ActionsBar = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    let res = await getSampleImages();
    setImages(res.photos);
  };

  return (
    <ActionsMenu>
      <SideBarNav />
      <div className="main-actions">
        <div>Image Manager</div>
        <Button bold={true}>Computer</Button>
        <Button border={true}>Search stock images</Button>
        <div style={{ display: "flex", gap: "2vmin", marginBlock: "2vmin" }}>
          <Action>
            <Layout />
          </Action>
          <Action>
            <Layout />
          </Action>
          <Action>
            <Trash />
          </Action>
        </div>
        <ImageGrid images={images} />
      </div>
    </ActionsMenu>
  );
};

export default ActionsBar;
