import { Link } from "react-router-dom";
import "../../../static/styles/utils/button-contained.scss";

export default function ButtonContained({ ctaText, className = "", ctaLink }) {
  return (
    <button className={`btn_contained ${className}`} variant="contained">
      <Link className="btn_link_wrap" to={ctaLink}>
        <span data-attr-span={ctaText}>{ctaText}</span>
      </Link>
    </button>
  );
}
