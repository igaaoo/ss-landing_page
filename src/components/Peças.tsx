import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Terra from '../images/terra.jpg'
import Marte from '../images/marte.jpg'
import Lua from '../images/lua.jpg'
import Universo from '../images/universo.jpg'

import '../App.css'

// import required modules
import { Navigation } from 'swiper'

export function Peças() {
  return (
    <div id="peças">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Terra} />
          <h1>alo</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lua} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Marte} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Universo} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
