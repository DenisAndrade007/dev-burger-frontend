import React, { useState, useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { formatPrice } from '../../utils/formatPrice';

import { api } from '../../services/api';
import CardProduct from '../CardProduct';
import { Container, Title, Controls, NavButton } from './styles';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    api
      .get('/products')
      .then((res) => {
        const productsOnOffer = res.data
          .filter((p) => p.offer === true)
          .map((product) => ({
            currencyValue: formatPrice(product.price),
            ...product,
          }));
        setOffers(productsOnOffer);
      })
      .catch((err) => console.error('Erro:', err));
  }, []);

  return (
    <Container>
      <Title>Ofertas do Dia</Title>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        navigation={false}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }, 
          1280: { slidesPerView: 5 },  
        }}
      >
        {offers.map((item) => (
          <SwiperSlide key={item.id}>
            <CardProduct product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Controls>
        <NavButton className="prev" onClick={() => swiperRef.current?.slidePrev()}>
          ‹
        </NavButton>
        <NavButton className="next" onClick={() => swiperRef.current?.slideNext()}>
          ›
        </NavButton>
      </Controls>
    </Container>
  );
}