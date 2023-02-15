import theme from "../config/theme/theme";
import image from "../image/color.jpg";
export const ProductPageStyles = () => ({
  searchWrapper: {
    display: "flex",
    width: "30%",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "0 auto",
    padding: "20px",
  },
  infoWrapper: {
    margin: "0 4px",
  },
  mainTitle: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#f19930",
    fontSize: 30,
  },
  errorInfoWrapper: {
    verticalAlign: "middle",
  },
});

export const InfoPageStyles = () => ({
  infoWrapper: {
    margin: "0 4px",
  },
  mainTitle: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 30,
    color: "#f19930",
  },
  infoWrapperContainer: {
    display: "flex",
    alignItems: "center",
  },
  imageWrapper: {
    // backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center left",
  },
});
