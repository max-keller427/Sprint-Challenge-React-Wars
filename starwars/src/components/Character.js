import React from "react";

function Character(props) {
  console.log(props.character.films);
  return (
    <div className="character">
      <h3>{props.character.name}</h3>

      <p>
        <strong>Birth Year:</strong> {props.character.birth_year}
      </p>
      <p>
        <strong>Created:</strong> {props.character.created}
      </p>
      <p>
        <strong>Edited:</strong> {props.character.edited}
      </p>
      <p>
        <strong>Eye Color:</strong> {props.character.eye_color}
      </p>
      <div className="ul-list">
        <p>
          <strong>Films </strong>
        </p>
        <ul>
          {props.character.films.map(film => (
            <li>{film}</li>
          ))}
        </ul>
      </div>
      <p>
        <strong>Gender: </strong>
        {props.character.gender}
      </p>
      <p>
        <strong>Hair Color:</strong> {props.character.hair_color}
      </p>
      <p>
        <strong>Height:</strong> {props.character.height}
      </p>
      <p>
        <strong>Homeworld:</strong> {props.character.homeworld}
      </p>
      <p>
        <strong>Mass:</strong> {props.character.mass}
      </p>
      <p>
        <strong>Skin Color:</strong> {props.character.skin_color}
      </p>
      <p>
        <strong>Species:</strong> {props.character.species}
      </p>
      <div className="ul-list">
        <p>
          <strong>Starships </strong>
        </p>
        {
          <ul>
            {props.character.starships.map(ship => (
              <li>{ship}</li>
            ))}
          </ul>
        }
      </div>
      <p>
        <strong>URL:</strong> {props.character.url}
      </p>
      <div className="ul-list">
        <p>
          <strong>Vehicles </strong>
        </p>
        {
          <ul>
            {props.character.vehicles.map(vehicle => (
              <li>{vehicle}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}

export default Character;
