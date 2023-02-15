import { useMemo, useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Pagination from '../components/PaginationComponent/index'
import getFilteredList from '../services/getFilteredList'

import SearchInput from '../components/Searchinput/searchInput'
import CardList from '../components/CardList/index'
import { ProductPageStyles } from './styles'
import allProducts from "./store"
const perPageOptions = [6, 8, 12]

const Products = () => {

  const classes = ProductPageStyles()
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(6)
  const [search, setSearch] = useState('')


  const { products, isLoadingProducts, getProducts } = allProducts


  const cards = [
    {
      price: 19,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tapons: [
        {
          size: 'regular',
          coating: 'none',
          amount: 8
        },
        {
          size: 'regular',
          coating: 'CBD',
          amount: 4
        }
      ],
      id: 1
    },
    {
      id: 2,
      price: 18,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tapons:
        '<tapons><tampon><size>regular</size><coating>none</coating><amount>10</amount></tampon><tampon><size>regular</size><coating>CBD</coating><amount>2</amount></tampon></tapons>'
    },
    {
      id: 3,
      price: 19,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tapons: [
        {
          size: 'small',
          coating: 'none',
          amount: 8
        },
        {
          size: 'small',
          coating: 'CBD',
          amount: 4
        }
      ]
    },
    {
      id: 4,
      price: 18,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>10</amount></tampon><tampon><size>small</size><coating>CBD</coating><amount>2</amount></tampon></tapons>'
    },
    {
      id: 5,
      price: 17,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>regular</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 6,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 7,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 8,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 9,
      price: 3,
      currency: 'GBP',


      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 10,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 11,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 12,
      price: 19,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tapons: [
        {
          size: 'regular',
          coating: 'none',
          amount: 8
        },
        {
          size: 'regular',
          coating: 'CBD',
          amount: 4
        }
      ]
    },
    {
      id: 13,
      price: 18,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tapons:
        '<tapons><tampon><size>regular</size><coating>none</coating><amount>10</amount></tampon><tampon><size>regular</size><coating>CBD</coating><amount>2</amount></tampon></tapons>'
    },
    {
      id: 14,
      price: 19,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tapons: [
        {
          size: 'small',
          coating: 'none',
          amount: 8
        },
        {
          size: 'small',
          coating: 'CBD',
          amount: 4
        }
      ]
    },
    {
      id: 15,
      price: 18,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>10</amount></tampon><tampon><size>small</size><coating>CBD</coating><amount>2</amount></tampon></tapons>'
    },
    {
      id: 16,
      price: 17,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>regular</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 17,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 18,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 19,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 20,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 21,
      price: 3,
      currency: 'GBP',
      productImage:


        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    },
    {
      id: 22,
      price: 3,
      currency: 'GBP',
      productImage:
        'https://daye.cdn.prismic.io/daye/ee153f6163435330b18495535217c531300382a8_product2x.png',
      tampons:
        '<tapons><tampon><size>small</size><coating>none</coating><amount>12</amount></tampon></tapons>'
    }
  ]

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setPage(0)
  }, [])

  const handlerPerPage = value => {
    setPerPage(value)
    setPage(0)
  }

  const { filteredList, paginated } = useMemo(() => {
    const filteredList = getFilteredList(search, cards, ['price'])

    const paginated = filteredList?.slice(
      page * perPage,
      page * perPage + perPage
    )
    return { filteredList, paginated }
  }, [search, page, perPage, cards])



  const loading = false
  return (
    <>
      {loading ? (
        // <Loading />
        <p></p>
      ) : (
        <>
          <h2 style={classes.mainTitle}>{'Products list'}</h2>
          <div style={classes.searchWrapper}>
            <SearchInput onChange={setSearch} />
          </div>
          <CardList cards={paginated} />
          {filteredList?.length > perPage && (
            <Pagination
              total={filteredList?.length}
              page={page}
              perPage={perPage}
              onPageChange={setPage}
              onPerPageChange={handlerPerPage}
              rowsPerPageOptions={perPageOptions}
            />
          )}
        </>
      )}
    </>
  )
}
export default observer(Products)