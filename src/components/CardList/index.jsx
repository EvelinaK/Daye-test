import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import ProductCard from '../CardComponent/Index'
import { cardListStyles } from './styles'
import allProducts from 'pages/store'
import goodsStore from 'stores/parchesStore'

const CardListWrapper = ({
  cards
}) => {
  const classes = cardListStyles()
  const { setFavoriteProducts, favoriteProducts, isLoading } = allProducts
  const { setProductToBasket } = goodsStore


  const { t } = useTranslation()

  const addToFavorite = (e, data) => {

    const favoriteItem = cards.find(card => card.id === data)

    setFavoriteProducts(favoriteItem)
    e.stopPropagation()
    e.preventDefault()
  }

  const addProductToCard = (e, data) => {
    const productFromList = cards.find(card => card.id === data)
    setProductToBasket(productFromList)
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div style={classes.mainContent}>
      {cards.length ? (
        cards.map((card, i) => (
          <ProductCard
            key={i}
            card={card}
            name={card.price}
            addProduct={addToFavorite}
            addProductToCard={addProductToCard}
          />
        ))
      ) : (
        <div style={classes.noProducts}>{t('There are no products yet')}</div>
      )}
    </div>
  )
}
export default observer(CardListWrapper)