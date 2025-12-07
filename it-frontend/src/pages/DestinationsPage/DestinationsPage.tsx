import { useState } from "react";
import { Destination } from "../../components/Destination/Destination";
import { destinations } from "../../utils/destinations";
import "./DestinationsPage.css";

export const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortDesc, setSortDesc] = useState<boolean>(true);

  const formattedSearch = searchTerm.trim().toLowerCase();

  const visibleDestinations = destinations
    .filter((destination) => {
      if (!formattedSearch) return true;
      return destination.name.toLowerCase().includes(formattedSearch);
    })
    .sort((a, b) => {
      if (sortDesc) {
        return b.rating - a.rating;
      }
      return a.rating - b.rating;
    });

  return (
    <div>
      <div className="destinations-page">
        <header className="destinations-header">
          <h1>Destinations</h1>
          <p>
            Explore handpicked places around the world — from tropical islands
            and cultural capitals to vibrant cities and calm coastal escapes.
          </p>
        </header>
        <div className="destinations-controls">
          <input
            type="text"
            className="destinations-search"
            placeholder="Search by destination name or description…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="destinations-sort-button"
            onClick={() => {
              setSortDesc(!sortDesc);
            }}
          >
            {sortDesc
              ? "Sort by rating: High > Low"
              : "Sort by rating: Low > High"}
          </button>
        </div>
        <section className="destinations-grid">
          {visibleDestinations.map((destination) => (
            <Destination key={destination.name} {...destination} />
          ))}
        </section>
      </div>
      <footer>
        <p>&copy; 2025 TravelMe - Made for a web development project.</p>
      </footer>
    </div>
  );
};
