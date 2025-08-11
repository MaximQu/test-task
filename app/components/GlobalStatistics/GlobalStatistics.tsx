import { FC } from "react";
import { ArrowDown } from "@/app/ui/icons";
import ProgressBar from "../ProgressBar/ProgressBar";
import Section from "../Section/Section";
import { testUserData, achievementsData } from "./../../data/achievements";

import st from "./GlobalStatistics.module.scss";

const statisticList = [
  {
    count: testUserData.firstRankAchievement,
    description: "Досягнень відкрито 1 рангу",
  },
  {
    count: testUserData.secondRankAchievement,
    description: "Досягнень відкрито 2 рангу",
  },
  {
    count: testUserData.thirdRankAchievement,
    description: "Досягнень відкрито 3 рангу",
  },
  {
    count: testUserData.closedAchievements,
    description: "Досягнень закрито",
  },
];

const generalList = [
  {
    count: achievementsData.totalAchievementsAmount,
    description: "Всі досягненя",
  },
  {
    count: achievementsData.platformAchievementsAmount,
    description: "Досягненя на платформі",
  },
  {
    count: achievementsData.expertAchievementsAmount,
    description: "Досягненя спеціаліста",
  },
];

const GlobalStatistics: FC = () => {
  return (
    <Section
      title="Досягнення"
      subtitle="Ви крутіші, ніж 87% спеціалістів!"
      className={st.globalStatistics}
    >
      <div className={st.statisticsList}>
        <ProgressBar
          achieved={testUserData.achieved}
          total={achievementsData.totalAmount}
          className={st.progressBar}
        />
        <div className={st.statisticsWrapper}>
          {statisticList.map(({ count, description }) => (
            <div key={description} className={st.statisticsItem}>
              <span className={st.amount}>{count}</span>
              <p className={st.description}>{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={st.block}>
        <ul className={st.generalList}>
          {generalList.map(({ count, description }) => (
            <li key={description} className={st.generalItem}>
              <span className={st.generalcount}>{count}</span>
              <div className={st.wrapper}>
                <p className={st.description}>{description}</p>
                <span className={st.count}>{count}</span>
              </div>
            </li>
          ))}
        </ul>
        <button className={st.dropdown}>
          <span className={st.btnText}>Всі ранги</span>
          <ArrowDown className={st.arrowIcon} />
        </button>
      </div>
    </Section>
  );
};

export default GlobalStatistics;
