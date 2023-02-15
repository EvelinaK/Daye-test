import theme from "../../config/theme/theme";

export const cardComponentStyles = () => ({
  cardBox: {
    margin: "15px",
    padding: "15px",
    width: "calc((100%/4) - 30px)",
    minWidth: "310px",
    // minHeight: "300px",
    borderRadius: "5%",
    boxShadow: `0px 5px 10px ${theme.palette.primary.shadowColor}`,
    backgroundColor: theme.palette.primary.cardColor,
    [theme.breakpoints.down("lg")]: {
      width: "calc((100%/3) - 30px)",
    },
    [theme.breakpoints.down(1190)]: {
      width: "calc((100%/2) - 30px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc((100%/2) - 18px)",
      margin: "9px",
    },
    [theme.breakpoints.down(620)]: {
      width: "100%",
    },
  },
  controlTitle: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "15px 10px 10px",
  },
  delete: {
    marginLeft: 10,
    width: "39px",
    flexShrink: 0,
    "& :hover": {
      color: "pink",
    },
  },
  gridContainer: {
    padding: "0 27px 8px",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      padding: "0 15px",
    },
  },
  cardLabel: {
    color: "green",
    overflow: "hidden",
  },
  cardPrice: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: `1px solid ${`#925a4d`}`,
    padding: "5px 15px",
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily,
  },
  cardValue: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.primary.textBrown,
    padding: "5px 10px",
    minHeight: "80px",
    maxHeight: "80px",
    border: `1px solid ${`#925a4d`}`,
    borderRadius: "2px",
    fontFamily: theme.typography.fontFamily,
  },
  infoWrapper: {
    margin: "4px 10px 0",
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width: "calc((60%) - 30px)",
    maxWidth: "100%",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: theme.typography.fontFamily,
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily,
  },
  infoDescription: {
    display: "flex",
    marginRight: "20px",
    color: `1px solid ${`#925a4d`}`,
  },
  addToCardButton: {
    fontSize: "1.4rem",
  },

  basketCardBox: {
    margin: "15px",
    padding: "15px",
    width: "calc((100%) - 30px)",
    maxWidth: "250px",
    maxHeight: "350px",
    borderRadius: "5%",
    boxShadow: `0px 5px 10px ${theme.palette.primary.shadowColor}`,
    backgroundColor: theme.palette.primary.cardColor,
    [theme.breakpoints.down("lg")]: {
      width: "calc((100%/3) - 30px)",
    },
    [theme.breakpoints.down(1190)]: {
      width: "calc((100%/2) - 30px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc((100%/2) - 18px)",
      margin: "9px",
    },
    [theme.breakpoints.down(620)]: {
      width: "100%",
    },
  },
});
