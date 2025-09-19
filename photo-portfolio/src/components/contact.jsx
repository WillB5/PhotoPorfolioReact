import flickrIcon from "../assets/flickr.svg";

export default function ContactInfo() {
  return (
    <footer className="contact-footer m-5">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <span className="lead">willphotographyonline@gmail.com</span>
        <a
          href="https://flickr.com/people/194428356@N07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Flickr"
            src={flickrIcon}
            style={{
              height: "1em",
              width: "auto",
              filter: "invert(1)",
            }}
          />
        </a>
      </div>
    </footer>
  );
}
