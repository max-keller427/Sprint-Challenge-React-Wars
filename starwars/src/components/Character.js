import React from "react";

function Character(props) {
  console.log(props.character.films);
  return (
    <div className="character">
      <h3>Name: {props.character.name}</h3>
      <ul>
        <p>Birth Year: {props.character.birth_year}</p>
        <p>Created: {props.character.created}</p>
        <p>Edited: {props.character.edited}</p>
        <p>Eye Color: {props.character.eye_color}</p>
        <p>
          Films:{" "}
          <ul>
            {props.character.films.map(film => (
              <li>{film}</li>
            ))}
          </ul>
        </p>
        <p>Gender: {props.character.gender}</p>
        <p>Hair Color: {props.character.hair_color}</p>
        <p>Height: {props.character.height}</p>
        <p>Homeworld: {props.character.homeworld}</p>
        <p>Mass: {props.character.mass}</p>
        <p>Skin Color: {props.character.skin_color}</p>
        <p>Species: {props.character.species}</p>
        <p>Starships: {props.character.starships}</p>
        <p>URL: {props.character.url}</p>
        <p>Vehicles: {props.character.vehicles}</p>
      </ul>
    </div>
  );
}

export default Character;
