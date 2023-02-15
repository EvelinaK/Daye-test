import { useState, useMemo, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled, { keyframes } from 'styled-components'
import { Box } from '@material-ui/core'
import { useNavigate } from 'react-router'
import clsx from 'clsx'

import goodsStore from 'stores/parchesStore'
import ProductCard from '../CardComponent/Index'
import { menus } from './menuItems'
import MenuItem from './MenuItem'
import HeaderComponent from '../Header'
import RightSideModal from '../RightSideModal/index'
import LogoIcon from '../../image/icons/Logo'
import BasketIcon from 'image/icons/BasketIcon'
import { useLayoutStyles } from './styles'

const showBar = keyframes`
from {
  width: 70,
  transition: width .35s ease-out,
}

to {
  width: 210,
  transition: width .35s ease-out,
},
`

const ShowBarBox = styled.div`
  animation: ${props => props.showBarState && showBar} 0.35s ease 0s 1 normal;
`

const LeftSideLogoContainer = styled.div`
  style: ${props => props.style};
`


const Layout = ({ setRole, children }) => {
  const [isHiddenBar, setIsHiddenBar] = useState(1)
  const [isHiddenBarTest, setIsHiddenBarTest] = useState(false)
  const [modal, setModal] = useState('')
  const classes = useLayoutStyles()
  const navigate = useNavigate()
  const { addedProducts, isLoadingAddedProducts, removeProduct } = goodsStore

  const oddOrEven = isHiddenBar % 2


  useEffect(() => { }, [addedProducts])

  const productsFromBasket = useMemo(() => {

    return addedProducts
  }, [addedProducts])



  const cnLayout =
    isHiddenBar === 1
      ? classes.leftSideMenuInit
      : isHiddenBar > 1 && Boolean(oddOrEven)
        ? classes.leftSideMenu
        : isHiddenBar > 1 && !Boolean(oddOrEven)
          ? classes.leftSideMenuAnimation
          : classes.leftSideMenuInit

  const cnLogo = !Boolean(oddOrEven)
    ? classes.logoContainer
    : classes.logoWithoutText

  const handleNavigate = route => {
    navigate(route.path, { replace: true })
  }

  const handleHideSideBar = () => {
    setIsHiddenBar(prev => prev + 1)
    setIsHiddenBarTest(!isHiddenBarTest)
  }

  const handleCloseLeftSideBar = e => {
    e.stopPropagation()
    e.preventDefault()
    setIsHiddenBar(3)
    setIsHiddenBarTest(false)
  }

  const handleRemoveProductFromBasket = (e, item) => {
    e.stopPropagation()
    e.preventDefault()
    removeProduct(item.id)
  }

  const levelMenu = menus('user')['user']

  const handleOpenModal = () => {
    setModal('info')
  }
  const handleCloseModal = () => {
    setModal('')
  }
  return (
    <Box sx={classes.layoutContainer}>
      <ShowBarBox
        style={cnLayout}
        showBarState={isHiddenBarTest}
        oddOrEven={oddOrEven}
      >
        <LeftSideLogoContainer style={cnLogo}>
          <LogoIcon style={classes.logoBox} onClick={handleHideSideBar} />
          <span style={classes.logoText}>{'Viva'}</span>
        </LeftSideLogoContainer>
        {levelMenu.map(route => (
          <MenuItem
            title={route?.title}
            icon={route?.icon}
            onClick={() => handleNavigate(route)}
            key={route?.id}
            hideDescription={!Boolean(oddOrEven)}
          />
        ))}
      </ShowBarBox>
      <Box sx={classes.contentContainer} onClick={handleCloseLeftSideBar}>
        <HeaderComponent openModal={handleOpenModal} />

        <Box sx={classes.content}>{children}</Box>
        {modal === 'info' && (
          <>
            <RightSideModal
              onClose={handleCloseModal}
              icon={<BasketIcon />}
              title={'In bucket'}
              size="right"
            >
              {productsFromBasket?.length ? productsFromBasket.map(card => {
                return (
                  <ProductCard
                    card={card}
                    name={card.price}
                    removeProductFromBasket={handleRemoveProductFromBasket}
                    basketCard={true}
                  />
                )
              })
                : <p>{'You are on the right wait;)'}</p>}
            </RightSideModal>
          </>
        )}
      </Box>
    </Box>
  )
}

export default observer(Layout)
