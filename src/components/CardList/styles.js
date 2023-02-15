import theme from "../../config/theme/theme";

export const cardListStyles = () => ({
  mainContent: {
    margin: "-15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "-9px",
    },
  },
  noProducts: {
    fontSize: 16,
    display: "flex",
    minHeigth: 40,
    margin: 20,
    color: theme.palette.primary.textBrow,
  },
});
