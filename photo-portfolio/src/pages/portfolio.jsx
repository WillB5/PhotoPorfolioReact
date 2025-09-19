import { useState, useEffect } from "react";
import "../pages/portfolio.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [columns, setColumns] = useState(3);
  const [loadedImages, setLoadedImages] = useState({}); // object-based tracking ✅

  const photos = [
    { title: "Henry Vilas Zoo - Capybara", image: img1, tag: "nature" },
    { title: "Saw Cosplay", image: img2, tag: "portraits" },
    { title: "Jujutsu Kaisen Cosplay", image: img3, tag: "portraits" },
    { title: "Third Ward Portrait", image: img4, tag: "portraits" },
    { title: "UWM Portrait", image: img5, tag: "portraits" },
    { title: "Scummy Bears Outfit Portrait", image: img6, tag: "portraits" },
    { title: "BW Lamp Portrait", image: img7, tag: "portraits" },
    {
      title: "Anime Central 2025 - Persona Meetup",
      image: img8,
      tag: "events",
    },
    {
      title: "Anime Central 2025 - Persona Meetup",
      image: img9,
      tag: "events",
    },
    {
      title: "Anime Central 2025 - Resident Evil Meetup",
      image: img10,
      tag: "events",
    },
    {
      title: "Anime Central 2025 - Resident Evil Meetup",
      image: img11,
      tag: "events",
    },
    { title: "State Street Storefront", image: img12, tag: "street" },
    { title: "Olbrich Garden Tree Stump", image: img13, tag: "nature" },
    { title: "Parking Garage Portrait", image: img14, tag: "portraits" },
    { title: "BW Portrait", image: img15, tag: "portraits" },
    { title: "Grasshopper", image: img16, tag: "nature" },
    { title: "Chicago Chinatown", image: img17, tag: "street" },
    { title: "Christmas Lights", image: img18, tag: "street" },
    { title: "State Street Portrait", image: img19, tag: "portraits" },
    { title: "Downtown Park Portrait", image: img20, tag: "portraits" },
    { title: "Balcony Portrait", image: img21, tag: "portraits" },
    { title: "Henry Vilas Zoo - Macaw", image: img22, tag: "nature" },
    { title: "Henry Vilas Zoo - Orangutans", image: img23, tag: "nature" },
    { title: "Monona Terrace Portrait", image: img24, tag: "portraits" },
    {
      title: "Anime Central 2024 - Valorant Meetup",
      image: img25,
      tag: "events",
    },
    { title: "Dog Portrait", image: img26, tag: "nature" },
    { title: "Chinatown Station", image: img27, tag: "street" },
    { title: "UWM Stairs", image: img28, tag: "street" },
    { title: "State Street Stores", image: img29, tag: "street" },
  ];

  const filteredPhotos =
    filter === "all" ? photos : photos.filter((p) => p.tag === filter);

  const filterLabels = {
    all: "All",
    nature: "Nature/Animals",
    portraits: "Portraits",
    street: "Street",
    events: "Events",
  };

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 576) setColumns(1);
      else if (window.innerWidth < 992) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      else if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev + 1) % filteredPhotos.length);
      else if (e.key === "ArrowLeft")
        setSelectedIndex(
          (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredPhotos]);

  return (
    <div className="text-center container">
      {/* Filter Dropdown */}
      <div className="dropdown p-2">
        <button
          className="btn btn-secondary dropdown-toggle m-2"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by: {filterLabels[filter] ?? "All"}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {Object.entries(filterLabels).map(([key, label]) => (
            <li key={key}>
              <button className="dropdown-item" onClick={() => setFilter(key)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid */}
      <div
        className="portfolio-grid"
        style={{
          columnCount: columns,
          columnGap: "10px",
        }}
      >
        {filteredPhotos.map((item, index) => (
          <div
            key={item.title}
            style={{
              breakInside: "avoid",
              marginBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className={`fade-in ${loadedImages[item.title] ? "loaded" : ""}`}
              onLoad={() =>
                setLoadedImages((prev) => ({
                  ...prev,
                  [item.title]: true,
                }))
              }
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
          tabIndex="-1"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h5 className="modal-title">
                  {filteredPhotos[selectedIndex].title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedIndex(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={filteredPhotos[selectedIndex].image}
                  alt={filteredPhotos[selectedIndex].title}
                  className="img-fluid rounded shadow fade-in loaded"
                  style={{
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              {filteredPhotos.length > 1 && (
                <div className="d-flex justify-content-between px-3 pb-3">
                  <button
                    className="btn btn-outline-light"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + filteredPhotos.length) %
                          filteredPhotos.length
                      )
                    }
                  >
                    ← Prev
                  </button>
                  <button
                    className="btn btn-outline-light"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex + 1) % filteredPhotos.length
                      )
                    }
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
