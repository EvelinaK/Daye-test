import theme from "../../config/theme/theme";

export const ArticlesStyles = () => ({
  mainContent: {
    paddingBottom: 50,
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: "50%",

    [theme.breakpoints.down("sm")]: {
      paddingBottom: 10,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  titleArticles: {
    dispaly: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1AAA8D",
    fontFamily: theme.typography.fontFamily,
    fontSize: 36,
  },
  pointsContainer: {
    display: "flex",
    flexDirection: " column",
    minHeight: 100,
  },
  noProducts: {
    fontSize: 16,
    display: "flex",
    minHeigth: 40,
    margin: 20,
    color: theme.palette.primary.textBrow,
  },
});
