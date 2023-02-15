import { observer } from "mobx-react-lite";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";
import { FavoriteBorder } from "@material-ui/icons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";

import { cardComponentStyles } from "./styles";

const ProductCard = ({
  card,
  name,
  addProduct,
  addProductToCard,
  removeProductFromBasket,
}) => {
  const classes = cardComponentStyles();
  const { t } = useTranslation();

  const formatter = (card) => {
    let res = card?.tampons || card?.tapons;
    if (Array.isArray(res)) {
      return res;
    } else {
      const xml = new DOMParser().parseFromString(res, "text/xml");

      res = Array.prototype.slice
        .call(xml.getElementsByTagName("tampon"))
        .map((tamponXml) => {
          const tampon = {};
          Array.prototype.slice.call(tamponXml.children).forEach((attr) => {
            tampon[attr.tagName] = attr.textContent;
          });

          return tampon;
        });
    }

    return res;
  };

  return (
    <div key={card.price} style={classes.cardBox}>
      <div style={classes.controlTitle}>
        {removeProductFromBasket ? (
          <IconButton onClick={(e) => removeProductFromBasket(e, card)}>
            <ClearIcon />
          </IconButton>
        ) : (
          <IconButton onClick={(e) => addProduct(e, card.id)}>
            <FavoriteBorder />
          </IconButton>
        )}
      </div>
      <div style={classes.cardContainer}>
        <div style={classes.imageContainer}>
          <img
            style={classes.image}
            src={`${card.productImage}`}
            alt="foto"
          ></img>
        </div>
        <div style={classes.cardPrice}>
          <span>{card.currency}</span>
          <span> {`Price: ${card.price}`}</span>
        </div>
        <div style={classes.cardValue}>
          <div style={classes.gridContainerCardHeader}>
            <div style={classes.gridItem}> {t("size")}</div>
            <div style={classes.gridItem}>{t("coating")}</div>
            <div style={classes.gridItem}>{t("amount")}</div>
          </div>
          {formatter(card).length ? (
            formatter(card).map((elem, i) => (
              <>
                <div style={classes.gridContainerCard}>
                  <div style={classes.gridItem}>{elem.size}</div>
                  <div style={classes.gridItem}>{elem.coating}</div>
                  <div style={classes.gridItem}>{elem.amount}</div>
                </div>
              </>
            ))
          ) : (
            <div style={classes.noProducts}>{t("There are no admins yet")}</div>
          )}
        </div>
        {!removeProductFromBasket && (
          <div style={classes.ProductsAdd}>
            <IconButton
              style={classes.addToCardButton}
              onClick={(e) => addProductToCard(e, card.id)}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(ProductCard);
