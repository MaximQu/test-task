"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import Section from "../Section/Section";
import Card from "../Card/Card";

import st from "./PlatformAchievements.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

const platformAchievementsData = [
  {
    title: "Документаліст",
    description: "Додано 30 корисних документов.",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "За опублікованих статей в блогі",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "За опублікованих статей в блогі",
    rank: 1,
  },
  {
    title: "Документаліст",
    description: "За опублікованих статей в блогі",
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
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 12,
    totalAchievements: 50,
    rank: 3,
  },
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 12,
    totalAchievements: 50,
    rank: 3,
  },
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 12,
    totalAchievements: 50,
    rank: 3,
  },
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 2,
    totalAchievements: 8,
    rank: 2,
  },
  {
    title: "Документаліст",
    description: "Досягнення",
    achievedAmount: 2,
    totalAchievements: 8,
    rank: 2,
  },
  {
    title: "Знайомство",
    description: "Досягнення",
    achievedAmount: 0,
    totalAchievements: 8,
    isClosed: true,
    rank: 1,
  },
];

const PlatformAchievements: FC = () => {
  return (
    <Section
      title="Досягення на платформі"
      titleAmount={56}
      className={st.platformAchievements}
    >
      <Swiper
        modules={[Pagination, Grid]}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={16}
        slidesPerView={6}
        pagination={{ clickable: true }}
        breakpoints={{
          1199: { slidesPerView: 6 },
          1024: { slidesPerView: 5 },
          840: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          658: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          375: { slidesPerView: 1.5 },
        }}
      >
        {platformAchievementsData.map(
          (
            {
              title,
              description,
              achievedAmount,
              totalAchievements,
              isClosed,
              rank,
            },
            index,
          ) => (
            <SwiperSlide key={index} className={st.achievementItem}>
              <Card
                title={title}
                text={description}
                achievedAmount={achievedAmount}
                totalAchievements={totalAchievements}
                isClosed={isClosed}
                rank={rank as 1 | 2 | 3}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </Section>
  );
};

export default PlatformAchievements;
