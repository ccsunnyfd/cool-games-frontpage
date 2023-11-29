'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    id: 1,
    imgUrl: '/images/slider_img_1.png',
  },
  {
    id: 2,
    imgUrl: '/images/slider_img_2.png',
  },
  {
    id: 3,
    imgUrl: '/images/slider_img_3.png',
  },
  {
    id: 4,
    imgUrl: '/images/slider_img_4.jpg',
  },
  {
    id: 5,
    imgUrl: '/images/slider_img_5.jpg',
  },
  {
    id: 6,
    imgUrl: '/images/slider_img_6.jpg',
  },
  {
    id: 7,
    imgUrl: '/images/slider_img_7.jpg',
  },
]

const index = () => {
  return (
    <div className="overflow-hidden bg-violet-darker py-16">
      <Slider
        className="center"
        arrows={true}
        centerMode={true}
        infinite={true}
        centerPadding="60px"
        slidesToShow={3}
        slidesToScroll={1}
        speed={500}
        autoplay={true}
        dots={true}
        responsive={[
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: false,
            },
          },
        ]}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[280px] px-4 outline-none xl:h-[400px]"
          >
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              referrerPolicy="no-referrer"
              src={slide.imgUrl}
              alt=""
              className="border-[6px] border-solid border-pink-normal"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default index
