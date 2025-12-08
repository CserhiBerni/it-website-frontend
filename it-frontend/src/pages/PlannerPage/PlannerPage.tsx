import { useState } from "react";
import "./PlannerPage.css";
import { destinations } from "../../utils/destinations";
import { FaStar } from "react-icons/fa6";

export const PlannerPage = () => {
  const [selectedName, setSelectedName] = useState(destinations[0].name);
  const [days, setDays] = useState(7);
  const [people, setPeople] = useState(2);
  const [stars, setStars] = useState(3);

  const [includeTour, setIncludeTour] = useState(false);
  const [includeTransfer, setIncludeTransfer] = useState(false);
  const [includeSpa, setIncludeSpa] = useState(false);

  const starMultiplier: Record<number, number> = {
    1: 0.75,
    2: 0.9,
    3: 1,
    4: 1.1,
    5: 1.25,
  };

  let totalTripCost = 0;
  let totalPerPerson = 0;
  let perPersonPerDay = 0;

  const selectedDestination = destinations.find(
    (destination) => destination.name === selectedName
  );

  if (selectedDestination && days > 0 && people > 0) {
    const base = selectedDestination.baseCost;
    const multiplier = starMultiplier[stars];

    const extrasPerPerson =
      (includeTour ? 80 : 0) +
      (includeTransfer ? 40 : 0) +
      (includeSpa ? 60 : 0);

    const baseTrip = base * days * people;
    const withStars = baseTrip * multiplier;
    const extrasTotal = extrasPerPerson * people;

    totalTripCost = withStars + extrasTotal;
    totalPerPerson = totalTripCost / people;
    perPersonPerDay = totalTripCost / (people * days);
  }

  return (
    <div>
      <div className="planner-page">
        <section className="planner-header">
          <h1>Trip Planner</h1>
          <p>
            Estimate your travel cost and find the best destinations that match
            your budget.
          </p>
        </section>
        <section className="planner-content">
          <div className="planner-card">
            <h2>Trip Settings</h2>
            <label>Destination</label>
            <select
              value={selectedName}
              onChange={(e) => {
                setSelectedName(e.target.value);
              }}
            >
              {destinations.map((destination) => (
                <option key={destination.name}>{destination.name}</option>
              ))}
            </select>
            <div className="planner-grid">
              <div>
                <label>Days</label>
                <input
                  type="number"
                  min={1}
                  max={21}
                  value={days}
                  onChange={(e) => {
                    setDays(Number(e.target.value));
                  }}
                />
              </div>
              <div>
                <label>Travelers</label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={people}
                  onChange={(e) => {
                    setPeople(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="planner-stars">
              <label>
                Comfort level:{" "}
                <div className="planner-stars-value">
                  {stars} <FaStar />
                </div>
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={stars}
                onChange={(e) => {
                  setStars(Number(e.target.value));
                }}
              />
            </div>
            <div className="planner-extras">
              <label>
                <input
                  type="checkbox"
                  checked={includeTour}
                  onChange={() => {
                    setIncludeTour(!includeTour);
                  }}
                />
                Guided Tour
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={includeTransfer}
                  onChange={() => {
                    setIncludeTransfer(!includeTransfer);
                  }}
                />
                Airport Transfer
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={includeSpa}
                  onChange={() => {
                    setIncludeSpa(!includeSpa);
                  }}
                />
                Spa / Wellness
              </label>
            </div>
          </div>
          <div className="planner-card summary">
            {selectedDestination && (
              <div className="planner-image-wrapper">
                <img
                  src={selectedDestination.imageSrc}
                  alt={selectedDestination.name}
                />
              </div>
            )}
            <div className="summary-content">
              <h2>Estimated Cost</h2>
              <p className="main-price">
                {Math.round(totalTripCost).toLocaleString()} €
              </p>
              <div className="summary-row">
                <div>
                  <span>Per person</span>{" "}
                  <b>{Math.round(totalPerPerson).toLocaleString()} €</b>
                </div>
                <div>
                  <span>Per person / days</span>{" "}
                  <b>{Math.round(perPersonPerDay).toLocaleString()} €</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <p>&copy; 2025 TravelMe - Made for a web development project.</p>
      </footer>
    </div>
  );
};
