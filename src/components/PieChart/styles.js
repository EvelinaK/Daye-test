import theme from "../../config/theme/theme";

export const pieStyles = () => ({
  zoomIconWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  enabledZoom: {
    fill: "red",
  },
  tooltip: {
    background: "white",
    border: `solid 1px ${"red"}`,
    padding: "10px",
  },
  infoChartWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
    "&:nth-last-of-type(1)": {
      marginBottom: 0,
    },
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
  },
  pieNeastedChartContainer: {
    display: "flex",
    minHeight: "155px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  colorPickerContainer: {
    display: "inline-flex",
    flexDirection: "column",
  },
  colorPicker: {
    borderRadius: "50%",
    minWidth: "16px",
    height: "16px",
    marginRight: "5px",
  },
  colorPickerStatistic: {
    borderRadius: "50%",
    minWidth: "12px",
    height: "12px",
    marginRight: "10px",
  },
  colorPickerLabel: {
    marginRight: "5px",
    fontSize: "14px",
    fontWeight: 400,
    width: "auto",
  },
  colorPickerLabelStatistic: {
    marginRight: "5px",
    fontSize: "14px",
    fontWeight: 400,
    width: "auto",
  },
  colorPickerLimits: {
    display: "inline-flex",
    color: "red",
    marginRight: "5px",
    fontSize: "1.6rem",
    fontWeight: 500,
  },
  colorPickerLimitsStatistic: {
    display: "inline-flex",
    marginRight: "5px",
    fontSize: "16px",
    fontWeight: 500,
    color: "red",
  },
  colorPickerPersent: {
    display: "inline-flex",
    alignItems: "center",
    marginRight: "5px",
    fontSize: "14px",
    fontWeight: 400,
    color: "grey",
  },
  infoIcon: {
    width: "12px!important",
    height: "12px!important",
  },
  tooltipHide: {
    display: "none",
    visibility: "hidden",
  },
});
