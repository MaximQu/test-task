import { FC } from "react";
import { IconType } from "./types";

type ArrowDownProps = {
  className?: string;
  width?: number;
  height?: number;
} & IconType;

const ArrowDown: FC<ArrowDownProps> = ({
  width = 12,
  height = 8,
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00043 7.15626L0.34668 1.50251L1.40043 0.448761L6.00043 5.04876L10.6004 0.448761L11.6542 1.50251L6.00043 7.15626Z"
        fill="#535353"
      />
    </svg>
  );
};

export default ArrowDown;
