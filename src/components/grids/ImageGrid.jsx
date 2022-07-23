import { ImageContainer } from "../../styles/general";

const ImageGrid = ({ images }) => {
  console.log(images);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "1.35vmin",
        justifyContent: "space-between",
      }}
    >
      {images.map((img) => {
        return (
          <ImageContainer>
            {" "}
            <img src={img.src.medium} alt="" />
          </ImageContainer>
        );
      })}
    </div>
  );
};

export default ImageGrid;
