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

  const cards = [
    {
      price: 19,
      currency: "GBP",
      productImage:
        "https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png",
      tapons: [
        {
          size: "regular",
          coating: "none",
          amount: 8,
        },
        {
          size: "regular",
          coating: "CBD",
          amount: 4,
        },
      ],
    },
    {
      price: 18,
      currency: "GBP",
      productImage:
        "https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png",
      tapons:
        "<tapons><tampon><size>regular</size><coating>none</coating><amount>10</amount></tampon><tampon><size>regular</size><coating>CBD</coating><amount>2</amount></tampon></tapons>",
    },
    {
      price: 19,
      currency: "GBP",
      productImage:
        "https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png",
      tapons: [
        {
          size: "small",
          coating: "none",
          amount: 8,
        },
        {
          size: "small",
          coating: "CBD",
          amount: 4,
        },
      ],
    },
    {
      price: 18,
      currency: "GBP",
      productImage:
        "https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png",
      tampons:
        "<tapons><tampon><size>small</size><coating>none</coating><amount>10</amount></tampon><tampon><size>small</size><coating>CBD</coating><amount>2</amount></tampon></tapons>",
    },
    {
      price: 17,
      currency: "GBP",
      productImage:
        "https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png",
      tampons:
        "<tapons><tampon><size>regular</size><coating>none</coating><amount>12</amount></tampon></tapons>",
    },
    {
      price: 17,
      currency: "GBP",
      productImage:
        "https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png",
      tampons:
        "<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>",
    },
  ];
  const formatter = (card) => {
    let res = card.tampons || card.tapons;
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
          {card.price} {card.currency}
        </div>
        <div style={classes.cardValue}>
          <span>{t("available Products")}</span>
          {formatter(card).length ? (
            formatter(card).map((elem, i) => (
              <div
                style={classes.descriptionContainer}
                key={i + elem.size + elem.coating}
              >
                <span style={classes.infoDescription}>{elem.size}</span>
                <span style={classes.infoDescription}>{elem.coating}</span>
                <span style={classes.infoDescription}>{elem.size}</span>
                {!removeProductFromBasket && (
                  <IconButton
                    style={classes.addToCardButton}
                    onClick={(e) => addProductToCard(e, card.id)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                )}
              </div>
            ))
          ) : (
            <div style={classes.noAdmins}>{t("There are no products yet")}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(ProductCard);
