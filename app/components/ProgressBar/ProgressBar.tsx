import clsx from "clsx";
import { Star } from "@/app/ui/icons";
import { FC } from "react";
import { progressBarCounter } from "@/app/utils";

import st from "./ProgressBar.module.scss";

type ProgressBarProps = {
  achieved?: number;
  total?: number;
  className?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({
  achieved = 18,
  total = 143,
  className,
}) => {
  return (
    <div className={clsx(className, st.progressBar)}>
      <div className={st.progressBarContent}>
        <span className={st.text}>
          <Star />
          Відкрито досягнень
        </span>
        <span className={st.num}>
          {achieved} <span className={st.total}> / {total}</span>
        </span>
      </div>
      <div className={st.bar}>
        <span
          className={st.achieved}
          style={{ width: `${progressBarCounter(total, achieved)}%` }}
        />
        <span className={st.notAchieved} />
      </div>
    </div>
  );
};

export default ProgressBar;
