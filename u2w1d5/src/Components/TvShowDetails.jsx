import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function TvShowDetail() {
  const movieData = (movieId) => {
    const [movie, setMovie] = useState(null);
    const apiKey = "8a9ae283";

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
          );
          const data = await response.json();
          setMovie(data);
        } catch (error) {
          console.error("Errore nel recupero dei dati del film:", error);
        }
      };

      fetchData();
    }, [movieId, apiKey]);
    return movie;
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
        <Button variant='primary'>More info</Button>
      </Card.Body>
    </Card>
  );
}
export default TvShowDetail;
