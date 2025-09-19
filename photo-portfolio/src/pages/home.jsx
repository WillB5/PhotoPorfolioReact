import Capybara from "../assets/img1.jpg";
import SAWcosplay from "../assets/img2.jpg";
import Portrait1 from "../assets/img4.jpg";
import Portrait2 from "../assets/img5.jpg";
import Portrait3 from "../assets/img7.jpg";
import Portrait4 from "../assets/img16.jpg";
import Portrait5 from "../assets/img19.jpg";
import Lights from "../assets/img18.jpg";
import Macaw from "../assets/img22.jpg";

export default function Home() {
  return (
    <div className="container">
      <h1 className="display-3 m-2">About Me</h1>
      <p className="lead fs-3 text-start">
        I have been a photographer since 2015. My main focus is portrait
        photography but I also branch out into street and nature photography.
      </p>
      <h1 className="display-6 p-3">Recent Work</h1>
      <div className="d-flex w-100 justify-content-center">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade shadow-lg border border-2 border-light"
          data-bs-ride="carousel"
          style={{
            width: "90%",
            maxWidth: "800px",
            aspectRatio: "3 / 2",
            overflow: "hidden",
          }}
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src={Portrait3}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Portrait 3"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src={SAWcosplay}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="SAW cosplay"
              />
            </div>

            <div className="carousel-item h-100">
              <img
                src={Portrait1}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "contain",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Portrait 1"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src={Portrait2}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Portrait 2"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src={Macaw}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Macaw"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src={Portrait4}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Portrait 4"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src={Lights}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Christmas Lights"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src={Portrait5}
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "all 0.4s ease-in-out",
                }}
                alt="Portrait 5"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
