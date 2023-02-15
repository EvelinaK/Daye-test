import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

import { ArticlesStyles } from "./styles";
import styled from "styled-components";
import theme from "../../config/theme/theme";

const ArticlesComponent = ({ stats }) => {
  const classes = ArticlesStyles();

  const { t } = useTranslation();

  const Item = styled.li`
    font-size: 17px;
    line-height: 1.6;
    position: relative;
    padding: 4px;
    min-height: 27px;
    margin-left: 31px;
    :before {
      position: absolute;
      font-weight: 900;
      display: block;
      left: -35px;
      top: 0px;
      width: 27px;
      height: 27px;
      line-height: 27px;
      text-align: center;
      font-size: 12px;
      background-color: ${(props) =>
        theme.overrides.charts.doughnut[`cell${props.item + 1}`]};
      color: #ffffff;
      margin: 4px;
      border-radius: 450px;
      content: " ";
  `;

  const UnorderedList = styled.ul`
    list-style: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 0px;
    list-style-type: none;
    margin-bottom: 0px;
    
    }
  `;
  const StyleContent = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Styleinfo = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #ee7458;
  `;

  return (
    <div style={classes.mainContent}>
      <div style={classes.titleArticles}>
        {t("Details that affect women's health")}
      </div>
      <div style={classes.pointsContainer}>
        <UnorderedList>
          {stats.length ? (
            stats.map((elem, i) => (
              <Item item={i}>
                <StyleContent>
                  <Styleinfo>{elem.label}</Styleinfo>
                  <span>{`${elem.value}%`}</span>
                </StyleContent>
              </Item>
            ))
          ) : (
            <Item>
              <span>No stats</span>
            </Item>
          )}
        </UnorderedList>
      </div>
    </div>
  );
};
export default observer(ArticlesComponent);
