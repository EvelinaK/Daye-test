import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

import { ArticlesStyles } from "./styles";

const ArticlesComponent = () => {
  const classes = ArticlesStyles();

  const { t } = useTranslation();

  return (
    <div style={classes.mainContent}>
      <div style={classes.titleArticles}>
        {t("Areas of life that affect women's health")}
      </div>
      <div style={classes.pointsContainer}>
        <ul style={classes.articlesPoint}>
          <li style={classes.items}>
            <span>sleep</span>
          </li>
          <li style={classes.items}>
            <span>balanced diet</span>
          </li>
          <li style={classes.items}>
            <span>stress-free</span>
          </li>
          <li style={classes.items}>
            <span>physical activity</span>
          </li>
          <li style={classes.items}>
            <span>gynecological health</span>
          </li>
          <li style={classes.items}>
            <span>comfortable state of health</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default observer(ArticlesComponent);
