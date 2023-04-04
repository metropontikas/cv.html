// Types
import { MonogramSVGProps } from "../../types/Types";

const MonogramSVG = ({ initials }: MonogramSVGProps) => {
  return (
    <svg height="86px" width="86px">
      <circle cx="43px" cy="43px" r="43px" fill="#003D74"></circle>
      <text
        text-anchor="middle"
        x="60px"
        y="68px"
        fill="#fff"
        font-size="20px"
        id="SUBSTR_FALN"
      >
        {initials}
      </text>
    </svg>
  );
};
