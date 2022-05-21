import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import Terra from '../images/terra.jpg'
import Marte from '../images/marte.jpg'
import Lua from '../images/lua.jpg'
import Universo from '../images/universo.jpg'

import TerraRoupa from '../images/roupas/terraRoupa.png'
import LuaRoupa from '../images/roupas/luaRoupa.png'
import MarteRoupa from '../images/roupas/marteRoupa.png'
import UniversoRoupa from '../images/roupas/universoRoupa.png'

import '../App.css'

import { Navigation } from 'swiper'

export function Peças() {
  return (
    <div id="peças">
      {/* Carousel interativo com imagens e descrições */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="imgCarousel" src={Terra} />
          <div className="textoCarousel">
            <h2>EARTH-STY</h2>
            <p>
              A baixa gravidade não é um problema para você. O traje Earth-Sty lhe permite
              aproveitar ao máximo a órbita do planeta, sem limitar seus movimentos e com
              um design impecável!
            </p>
            <a
              href="#contato"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Adquira Agora
            </a>
          </div>
          <img className="roupas" src={TerraRoupa} alt="Roupa para terra" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgCarousel" src={Lua} />
          <div className="textoCarousel">
            <h2>MOON-STY</h2>
            <p>
              O traje Moon-Sty possibilita movimentos facilitados, sendo ideal para
              viajantes que buscam um estilo de vida mais leve e confortável.
            </p>
            <a
              href="#contato"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Adquira Agora
            </a>
          </div>
          <img className="roupas" src={LuaRoupa} alt="Roupa para terra" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgCarousel" src={Marte} />
          <div className="textoCarousel">
            <h2>MARS-STY</h2>
            <p>
              O novo mundo é um lugar diferente. O traje Mars-Sty nunca vai lhe deixar na
              mão quando o assunto é regulagem térmica e conforto.
            </p>
            <a
              href="#contato"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Adquira Agora
            </a>
          </div>
          <img className="roupas" src={MarteRoupa} alt="Roupa para terra" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgCarousel" src={Universo} />
          <div className="textoCarousel">
            <h2>UNIVERSE-STY</h2>
            <p>
              A exploração espacial se tornou mais fácil com o traje Universe-Sty. Tenha
              todos os equipamentos necessários para explorar o universo na palma de suas
              mãos, literalmente!
            </p>
            <a
              href="#contato"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Adquira Agora
            </a>
          </div>
          <img className="roupas" src={UniversoRoupa} alt="Roupa para terra" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
