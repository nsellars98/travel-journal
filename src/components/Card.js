import React from "react";

function Card(props) {
  return (
    <div className="card--container">
      <div className="card">
        <img
          src={require(`../assets/img/${props.imageUrl}`)}
          alt={props.title}
          className="card--image"
        />
        <div className="card--text_container">
          <div className="card--location_info">
            <svg
              className="card--icon"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
              />
            </svg>
            <p className="card--location">{props.location}</p>
            <a
              href={props.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card--url"
              aria-label="Hyperlink to destination on Google">View on Google Maps
            </a>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <p
            className="card--date">
              <span
                className="card--start_date">
                  {props.startDate}
              </span>
              -
              <span
                className="card--end_date">
                  {props.endDate}
              </span>
          </p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
      <hr className="card--separator" />
    </div>
  );
}

export default Card;