import clsx from "clsx";
import { FC, ReactNode } from "react";

import st from "./Section.module.scss";

type SectionProps = {
  title: string;
  titleAmount?: number;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

const Section: FC<SectionProps> = ({
  title,
  titleAmount,
  subtitle,
  children,
  className,
}) => {
  return (
    <section className={clsx(st.section, className)}>
      <h2 className={st.title}>
        {title} <sup className={st.amount}>{titleAmount}</sup>
      </h2>
      {subtitle && <p className={st.subtitle}>{subtitle}</p>}
      {children}
    </section>
  );
};

export default Section;
