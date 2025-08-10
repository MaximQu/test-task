"use client";
import { FC } from "react";
import Card from "../Card/Card";
import Section from "../Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import st from "./ExpertAchievements.module.scss";
import "swiper/css/pagination";
import "swiper/css/grid";

const expertAchievementsData = [
  {
    title: "Документаліст",
    description: "Додано 30 корисних документов.",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "За опублікованих статей в блоге",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "За опублікованих статей в блоге",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "За опублікованих статей в блоге",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 65,
    totalAchievements: 100,
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 65,
    totalAchievements: 100,
    rank: 1,
  },
];

const ExpertAchievements: FC = () => {
  return (
    <Section
      title="Досягення спеціаліста"
      titleAmount={86}
      className={st.expertAchievements}
    >
      <Swiper
        className={st.slider}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView="auto"
        pagination={{ clickable: true }}
      >
        {expertAchievementsData.map(
          (
            { title, description, achievedAmount, totalAchievements },
            index,
          ) => (
            <SwiperSlide key={index} className={st.achievementItem}>
              <Card
                title={title}
                text={description}
                achievedAmount={achievedAmount}
                totalAchievements={totalAchievements}
                rank={1}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </Section>
  );
};

export default ExpertAchievements;
