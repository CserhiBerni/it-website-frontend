import {
  FaGlobeEurope,
  FaLightbulb,
  FaPlane,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <article className="hero-content">
          <h1 className="hero-title">
            Discover your <br />
            next destination
          </h1>
          <h2 className="hero-subtitle">
            Plan trips, explore cities and start your journey with{" "}
            <span className="brand">TravelMe</span>.
          </h2>
          <button
            onClick={() => {
              navigate("/destinations");
            }}
          >
            Start Exploring
          </button>
        </article>
      </section>
      <section className="featured">
        <h2>Featured Destinations</h2>
        <div className="featured-cards">
          <article className="featured-card">
            <div className="image-box"></div>
            <div className="content-box">
              <h3>Bali</h3>
              <p className="description">
                Tropical paradise known for beaches, temples and lush green
                landscapes.
              </p>
              <div className="rating">
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStarHalfAlt color="#fbbf24" />
                <span>4.9</span>
              </div>
              <button
                onClick={() => {
                  navigate("/destinations");
                }}
              >
                Learn More
              </button>
            </div>
          </article>
          <article className="featured-card">
            <div className="image-box"></div>
            <div className="content-box">
              <h3>Hawaii</h3>
              <p className="description">
                Volcanic islands offering pristine beaches, surf spots and
                breathtaking sunsets.
              </p>
              <div className="rating">
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <span>5.0</span>
              </div>
              <button
                onClick={() => {
                  navigate("/destinations");
                }}
              >
                Learn More
              </button>
            </div>
          </article>
          <article className="featured-card">
            <div className="image-box"></div>
            <div className="content-box">
              <h3>Maldives</h3>
              <p className="description">
                Crystal-clear waters, white sand beaches and world-famous
                overwater villas.
              </p>
              <div className="rating">
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStar color="#fbbf24" />
                <FaStarHalfAlt color="#fbbf24" />
                <span>4.8</span>
              </div>
              <button
                onClick={() => {
                  navigate("/destinations");
                }}
              >
                Learn More
              </button>
            </div>
          </article>
        </div>
      </section>
      <section className="stats">
        <h2>Why TravelMe?</h2>
        <div className="stats-cards">
          <article className="stats-card">
            <h3>Handpicked Destinations</h3>
            <p className="description">
              We highlight only the best cities, beaches and cultural gems—no
              endless scrolling, just quality picks.
            </p>
            <FaGlobeEurope size={45} />
          </article>
          <article className="stats-card">
            <h3>Smart Trip Planning</h3>
            <p className="description">
              Use our built-in planner to estimate costs, compare routes and
              build the perfect itinerary in minutes.
            </p>
            <FaPlane size={45} />
          </article>
          <article className="stats-card">
            <h3>Personalized Experience</h3>
            <p className="description">
              Create an account to access custom suggestions, bookmarked
              destinations and tailored travel ideas.
            </p>
            <FaLightbulb size={45} />
          </article>
          <article className="stats-card">
            <h3>Trusted by Travelers</h3>
            <p className="description">
              Our platform is built for clarity—no hidden fees, no fluff. Just
              useful travel information you can trust.
            </p>
            <FaStar size={45} />
          </article>
        </div>
      </section>
      <section className="teaser">
        <h2>Plan your next trip in minutes</h2>
        <p>
          Use our smart Trip Planner to estimate your travel costs, adjust
          comfort level, add extras, and instantly see how much your journey
          would cost per person.
        </p>
        <button
          className="teaser-button"
          onClick={() => {
            navigate("/planner");
          }}
        >
          Try the Trip Planner
        </button>
      </section>
      <section className="account">
        <h2>Ready for your next adventure?</h2>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Create Account
        </button>
      </section>
      <footer>
        <p>&copy; 2025 TravelMe - Made for a web development project.</p>
      </footer>
    </div>
  );
};
