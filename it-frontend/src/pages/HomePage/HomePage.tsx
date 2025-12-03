import "./HomePage.css";
import bali from '../../images/bali.jpg'
import hawaii from '../../images/hawaii.jpg'
import maldives from '../../images/maldives.jpg'

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
            Plan trips, explore cities and start your journey with <span className="brand">TravelMe</span>.
          </h2>
          <button>Start Exploring</button>
        </article>
      </section>
      <section className="featured">
        <article className="featured-card">
          <img src={bali} alt="" />
          <h3>Bali</h3>
          <p className="description"></p>
        </article>
        <article className="featured-card">
          <img src={hawaii} alt="" />
          <h3>Hawaii</h3>
          <p className="description"></p>
        </article>
        <article className="featured-card">
          <img src={maldives} alt="" />
          <h3>Maldives</h3>
          <p className="description"></p>
        </article>
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
