export const progressBarCounter = (totalAchievements = 143, achieved = 18) => {
  return ((achieved / totalAchievements) * 100).toFixed(2);
};
