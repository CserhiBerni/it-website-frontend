import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./HomePage.css";

export const HomePage = () => {
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
          <button>Start Exploring</button>
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
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span>4.9</span>
              </div>
              <button>Learn More</button>
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
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>5.0</span>
              </div>
              <button>Learn More</button>
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
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span>4.8</span>
              </div>
              <button>Learn More</button>
            </div>
          </article>
        </div>
      </section>
      <section className="stats">
        <article className="stats-card">
          <i></i>
          <h3>Explore popular destinations</h3>
          <p className="description"></p>
        </article>
        <article className="stats-card">
          <i></i>
          <h3>Explore popular destinations</h3>
          <p className="description"></p>
        </article>
        <article className="stats-card">
          <i></i>
          <h3>Explore popular destinations</h3>
          <p className="description"></p>
        </article>
      </section>
      <section className="planner"></section>
      <section className="account">
        <h3>Ready for your next adventure?</h3>
        <button>Create Account</button>
      </section>
    </div>
  );
};
