import { useEffect, useState } from 'react';

import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { api } from '../../services/api';
import { CategoryButton, CategoryCard, Container, Controls, NavButton, Title } from './styles';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    api
      .get('/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Erro:', err));
  }, []);

  return (
    <Container>
      <Title>CATEGORIAS</Title>
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        navigation={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard>
              <img src={category.url} alt={category.name} />
              <CategoryButton
                onClick={() => {
                  window.location.href = `/cardapio?categoria=${category.id}`;
                }}
              >
                {category.name}
              </CategoryButton>
            </CategoryCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <Controls>
        <NavButton className="prev" onClick={() => swiperInstance?.slidePrev()}>
          ‹
        </NavButton>
        <NavButton className="next" onClick={() => swiperInstance?.slideNext()}>
          ›
        </NavButton>
      </Controls>
    </Container>
  );
}