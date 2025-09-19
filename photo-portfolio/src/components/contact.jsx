import flickrIcon from "../assets/flickr.svg";

function ContactInfo() {
  return (
    <footer className="text-center m-5">
      <p className="lead">
        willphotographyonline@gmail.com •
        <a href="https://flickr.com/people/194428356@N07/">
          <img
            alt="Flickr"
            src={flickrIcon}
            style={{
              height: "1em",
              width: "auto",
              marginLeft: "0.25em",
              filter: "invert(1)",
            }}
          />
        </a>
      </p>
    </footer>
  );
}

export default ContactInfo;
