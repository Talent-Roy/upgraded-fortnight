import { Link } from "react-router-dom";
import "../../../static/styles/utils/button-outlined.scss";

export default function ButtonOutlined({ ctaText, className = "", ctaLink }) {
  return (
    <Link className="btn_link_wrap" to={ctaLink}>
      <button className={`btn_outlined ${className}`} variant="contained">
        <span className="">
          <span>
            <span data-attr-span={ctaText}>{ctaText}</span>
          </span>
        </span>
      </button>
    </Link>
  );
}
