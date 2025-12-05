import type { DestinationProps } from "../../utils/Destination";
import "./Destination.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Destination = (props: DestinationProps) => {
  const fullStars = Math.floor(props.rating);
  const hasHalfStar = props.rating - fullStars >= 0.5;

  return (
    <article className="destination-card">
      <div className="destination-image-wrapper">
        <img
          src={props.imageSrc}
          alt={props.name}
          className="destination-image"
        />
      </div>
      <div className="destination-card-body">
        <h3 className="destination-name">{props.name}</h3>
        <p className="destination-description">{props.description}</p>
        <div className="destination-meta">
          <div className="destination-rating">
            {Array.from({ length: fullStars }).map((_, index) => (
              <FaStar key={index} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            <span className="destination-rating-value">
              {props.rating.toFixed(1)}
            </span>
          </div>
          <p className="destination-highlight">{props.highlight}</p>
        </div>
      </div>
    </article>
  );
};
