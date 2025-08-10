import clsx from "clsx";
import { Achieved, Lock, Tip } from "@/app/ui/icons";
import { progressBarCounter } from "@/app/utils";
import { FC } from "react";

import st from "./Card.module.scss";

type CardProps = {
  title: string;
  text: string;
  rank: 1 | 2 | 3;
  achievedAmount?: number;
  totalAchievements?: number;
  isClosed?: boolean;
  className?: string;
};

const Card: FC<CardProps> = ({
  title,
  text,
  rank,
  achievedAmount,
  totalAchievements,
  isClosed = false,
  className,
}) => {
  return (
    <div className={clsx(st.card, className, st[`rank${rank}`])}>
      <Tip className={st.tip} />
      {isClosed ? (
        <Lock className={st.icon} />
      ) : (
        <Achieved className={st.icon} height={81} />
      )}
      <div className={st.content}>
        <span className={st.line} />
        <h3 className={st.title}>{title}</h3>
        <div className={st.block}>
          <p className={st.text}>{text}</p>
          {typeof achievedAmount === "number" && achievedAmount >= 0 && (
            <div className={st.count}>
              <span>{achievedAmount}</span>
              <span className={st.total}> / {totalAchievements}</span>
            </div>
          )}
        </div>
        {typeof achievedAmount === "number" && achievedAmount >= 0 && (
          <div className={st.progressBar}>
            <span
              className={st.achieved}
              style={{
                width: `${progressBarCounter(totalAchievements, achievedAmount)}%`,
              }}
            />
            <span className={st.notAchieved} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
