import { useEffect } from 'react'
import i18n from "i18next";
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import ArticlesComponent from '../components/ArticlesComponent'
import PieChartComponent from '../components/PieChart/index'
import { InfoPageStyles } from './styles'
import styled from "styled-components";
import image from "../image/info.png";
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

  const TextContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  color: #784a14;
  `;
  const ImageContainer = styled.img`
    display: flex;
    max-width: 600px;
    max-height: 310px;
    width: 100%;
  `;

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
          <h2 style={classes.mainTitle}>{i18n.t('Stats information')}</h2>
          <div style={classes.imageWrapper}>
            <div style={classes.infoWrapperContainer}>
              <ArticlesComponent stats={stats} />
              <PieChartComponent
                data={stats}
                visibleEffect={false}
              />
            </div>
            <TextContainer>
              <div>
                <p>The lack of female enrolment in clinical trials has amplified the lack of knowledge surrounding women’s health. In the US, the National Institutes of Health did not
                  require female enrolment in trials until 1993 under the pretext that women’s bodies
                  are ‘complex’. To this day, an overwhelming number of studies heavily recruit men.
                  For many decades, male researchers have written publications based only on male participants.
                  We are strong believers that women’s health matters.</p>
              </div>
              <ImageContainer
                style={classes.image}
                src={`${image}`}
                alt="foto"
              ></ImageContainer>
            </TextContainer>
            <>
              <TextContainer >
                <p>The lack of female enrolment in clinical trials has amplified the lack of knowledge surrounding women’s health. In the US, the National Institutes of Health did not
                  require female enrolment in trials until 1993 under the pretext that women’s bodies
                  are ‘complex’. To this day, an overwhelming number of studies heavily recruit men.
                  For many decades, male researchers have written publications based only on male participants.
                  We are strong believers that women’s health matters.</p>
              </TextContainer>
              <TextContainer>
                <p>Women's health in all aspects will continue to grow and be of interest to the general public,
                  as well as medical, healthcare, and technology industries. Some developments can already be seen
                  in traditional areas, such as endometriosis, fertility, and contraception, with more funding
                  allocated to the research and implementation of these services.</p>
              </TextContainer>
              <TextContainer >
                <p>It is important that healthcare is equally accessible to all
                  females, regardless of race, colour,
                  sexual orientation, location, and socioeconomic background.
                  However, with so many women’s
                  therapy areas left to understand and explore, there is
                  plenty of space for more innovations.</p>
              </TextContainer>
            </>
          </div>
        </>
      )
      }

    </>
  )
}
export default (observer(Home))

