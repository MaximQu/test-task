import { FC } from "react";
import { IconType } from "./types";

type AchievedProps = {
  className?: string;
  width?: number;
  height?: number;
} & IconType;

const Achieved: FC<AchievedProps> = ({
  width = 72,
  height = 90,
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 72 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="0" y="0" width="71.0833" height="89.6965">
        <div
          style={{
            backdropFilter: "blur(0.5px)",
            clipPath: "url(#bgblur_0_4005_872_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <g filter="url(#filter0_dii_4005_872)" data-figma-bg-blur-radius="1">
        <path
          d="M35.5417 86.6965C25.9152 83.8399 17.9183 78.0084 11.551 69.2021C5.18366 60.3959 2 50.4763 2 39.4435V13.5314L35.5417 1L69.0833 13.5314V39.4435C69.0833 50.4763 65.8996 60.3959 59.5323 69.2021C53.165 78.0084 45.1681 83.8399 35.5417 86.6965Z"
          fill="url(#paint0_linear_4005_872)"
          fillOpacity="0.55"
          shapeRendering="crispEdges"
        />
        <path
          d="M68.833 13.7041V39.4434C68.833 50.4244 65.666 60.2927 59.3301 69.0557C53.0079 77.7995 45.0785 83.5874 35.541 86.4346C26.0041 83.5873 18.0758 77.799 11.7539 69.0557C5.4179 60.2927 2.25 50.4244 2.25 39.4434V13.7041L35.541 1.2666L68.833 13.7041Z"
          stroke="url(#paint1_linear_4005_872)"
          strokeWidth="0.5"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M54.2793 33.418L30.665 57.0332L17.1406 43.5088L20.418 40.2314L30.5947 50.4082L30.666 50.4785L30.7363 50.4082L51.002 30.1406L54.2793 33.418Z"
        fill="url(#paint2_linear_4005_872)"
        stroke="#BF9162"
        strokeWidth="0.2"
      />
      <defs>
        <filter
          id="filter0_dii_4005_872"
          x="0"
          y="0"
          width="71.0833"
          height="89.6965"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4005_872"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4005_872"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4005_872"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_4005_872"
            result="effect3_innerShadow_4005_872"
          />
        </filter>
        <clipPath id="bgblur_0_4005_872_clip_path" transform="translate(0 0)">
          <path d="M35.5417 86.6965C25.9152 83.8399 17.9183 78.0084 11.551 69.2021C5.18366 60.3959 2 50.4763 2 39.4435V13.5314L35.5417 1L69.0833 13.5314V39.4435C69.0833 50.4763 65.8996 60.3959 59.5323 69.2021C53.165 78.0084 45.1681 83.8399 35.5417 86.6965Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_4005_872"
          x1="35.5417"
          y1="1"
          x2="35.5417"
          y2="86.6965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEEEEE" stopOpacity="0.8" />
          <stop offset="1" stopColor="#AAAAAA" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4005_872"
          x1="35.5417"
          y1="1"
          x2="35.5417"
          y2="86.6965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E4E4" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4005_872"
          x1="35.7109"
          y1="57.1747"
          x2="35.7109"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#997756" />
          <stop offset="0.5" stopColor="#F4CCA5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Achieved;
