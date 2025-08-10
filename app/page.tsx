import clsx from "clsx";
import {
  ExpertAchievements,
  GlobalStatistics,
  PlatformAchievements,
} from "./components";

import st from "./page.module.scss";

export default function Home() {
  return (
    <main className={st.main}>
      <div className={clsx(st.wrapper, "container")}>
        <GlobalStatistics />
        <PlatformAchievements />
        <ExpertAchievements />
      </div>
    </main>
  );
}
