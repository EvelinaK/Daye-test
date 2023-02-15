import { publicPaths } from "../../config/routes/routes";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

import i18n from "i18next";

export const menus = (routeType) => ({
  user: [
    {
      id: "home",
      title: i18n.t("home"),
      icon: <CottageOutlinedIcon />,
      path: publicPaths.home,
    },
    {
      id: "products",
      title: i18n.t("products"),
      icon: <CategoryOutlinedIcon />,
      path: publicPaths.products,
    },
  ],
});
