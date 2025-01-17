// Types
import type { SVGComponentProps } from "../../types/Types";
// Styles
import "./SVGStyling.scss";

const SoftwareSVG = ({ absolute }: SVGComponentProps) => {
  return absolute ? (
    <div className="heading__icon ">
      <svg width="30px" height="30px" viewBox="0 0 54 54">
        <title>Software Icon</title>
        <circle cx="27" cy="27" r="26"/>
        <path
          transform="translate(11,11)"
          d="M30.08 2.986H1.92C.853 2.986 0 3.84 0 4.906v17.067c0 1.067.853 1.92 1.92 1.92h13.013v2.987h-4.906c-.64 0-1.067.426-1.067 1.066 0 .64.427 1.067 1.067 1.067h11.946c.64 0 1.067-.427 1.067-1.067 0-.64-.427-1.066-1.067-1.066h-4.906v-2.987H30.08c1.067 0 1.92-.853 1.92-1.92V4.906c0-1.066-.853-1.92-1.92-1.92zm0 18.987H1.92V4.906h27.947v17.067z"
        />
      </svg>
    </div>
  ) : (
    <svg width="30px" height="30px" viewBox="0 0 54 54">
      <title>Software Icon</title>
      <circle cx="27" cy="27" r="26"/>
      <path
        transform="translate(11,11)"
        d="M30.08 2.986H1.92C.853 2.986 0 3.84 0 4.906v17.067c0 1.067.853 1.92 1.92 1.92h13.013v2.987h-4.906c-.64 0-1.067.426-1.067 1.066 0 .64.427 1.067 1.067 1.067h11.946c.64 0 1.067-.427 1.067-1.067 0-.64-.427-1.066-1.067-1.066h-4.906v-2.987H30.08c1.067 0 1.92-.853 1.92-1.92V4.906c0-1.066-.853-1.92-1.92-1.92zm0 18.987H1.92V4.906h27.947v17.067z"
      />
    </svg>
  );
};
export default SoftwareSVG;
