import React from 'react'
import Slider from 'react-slick'
import { alterMyPokemon } from '../../utils/alterPokedex'
import CardPokemonSlider from '../CardPokemonSlider'

import * as Styled from './styled'

const Bottom = ({ classN, title, onClick }: any) => {
  return (
    <Styled.bottom className={classN} onClick={onClick}>
      <i className={`fa ${title}`} />
    </Styled.bottom>
  )
}

const CustomPaging = ({ onClick }: any) => {
  return <Styled.customPaging onClick={onClick} />
}

export default function Carrossel({ pokemons, addPokemon, user }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    autoplay: true,
    className: 'slider variable-width',
    variableWidth: true,
    nextArrow: <Bottom title="fa-chevron-right" classN="right" />,
    prevArrow: <Bottom title="fa-chevron-left" classN="left" />,
    dotsClass: 'slick-dots slick-thumb',
    // eslint-disable-next-line react/display-name
    customPaging: () => <CustomPaging />,
    responsive: [
      {
        breakpoint: 310,
        settings: {
          slidesToScroll: 1,
          variableWidth: false,
          dots: true
        }
      }
    ]
  }
  return (
    <Styled.View>
      <Slider {...settings}>
        {pokemons?.map((item: any, index: any) => {
          return (
            <div className="cardPokemon" key={index}>
              <CardPokemonSlider
                name={item?.name}
                id={item?.id}
                type={item?.type}
                addPokemon={() => alterMyPokemon(addPokemon, user, item)}
              />
            </div>
          )
        })}
      </Slider>
    </Styled.View>
  )
}
