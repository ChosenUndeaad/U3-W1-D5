import React, { Component } from "react";

class LotrMovies extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=8a9ae283&s=Lord-Of-The-Rings")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.Search,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Errore nel recupero dati:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='container-fluid mx-2 mt-4'>
        <div className='row my-2'>
          <h2>Rewatch Later: Lord of the Rings</h2>
        </div>
        <div className='row g-2 m-2'>
          {movies.slice(0, 6).map((movie) => (
            <div key={movie.imdbID} className='col-12 col-md-4 col-lg-2 p-1'>
              <div className='ratio ratio-16x9'>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LotrMovies;
