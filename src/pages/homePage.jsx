import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import ArticlesComponent from '../components/ArticlesComponent'
import PieChartComponent from '../components/PieChart/index'
import { InfoPageStyles } from './styles'
import styled from "styled-components";

const Home = () => {

  const { t } = useTranslation()
  const classes = InfoPageStyles();

  const stats = [
    {
      "label": "comfortable hygiene products",
      "name": "comfortable hygiene products",
      "value": 20,
    },
    {
      "label": "no menstrual pain",
      "name": "no menstrual pain",
      "value": 15,
    },
    {
      "label": "stress-free",
      "name": "stress-free",
      "value": 20,
    },
    {
      "label": "gynecological health",
      "name": "gynecological health",
      "value": 20,
    },
    {
      "label": "women's health screening",
      "name": "women's health screening",
      "value": 20,
    },
    {
      "label": "comfortable state of health",
      "name": "comfortable state of health",
      "value": 15,
    },

  ]



  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const loading = false

  return (
    <>
      {loading ? (
        // <Loading />
        <p></p>
      ) : (

        <>
          <h2 style={classes.mainTitle}>{'Stats information'}</h2>
          <div style={classes.imageWrapper}>
            <div style={classes.infoWrapperContainer}>
              <ArticlesComponent stats={stats} />
              <PieChartComponent
                data={stats}
                visibleEffect={false}
              />
            </div>
          </div>
        </>
      )}

    </>
  )
}
export default (observer(Home))

