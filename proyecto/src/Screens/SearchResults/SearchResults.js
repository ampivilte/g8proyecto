import React, { Component } from "react";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

const api_key = 'e4c9de46fa2b077570ba8601a80bf4d6';


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMovies: [],
      cargando: true,
      error: "",
    };
  }

  componentDidMount() {
    const urlSearch = new URLSearchParams(this.props.location.search);
    const termino = urlSearch.get("searchData") || "";

    if (!termino.trim()) {
      this.setState({ cargando: false, dataMovies: [] });
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      )}&api_key=${api_key}&language=es-AR&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          dataMovies: Array.isArray(data.results) ? data.results : [],
          cargando: false,
          error: "",
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          cargando: false,
          error: "Hubo un problema cargando los resultados.",
        });
      });
  }

  render() {
    const { dataMovies, cargando, error } = this.state;

    return (
      <section className="home-block">

        <div className="home-block__header">
          <h2>Resultados de búsqueda</h2>
        </div>

        <div className="home-block__header">
          <h3>Películas</h3>
        </div>

        {cargando && <p>Cargando…</p>}
        {error && <p>{error}</p>}
        {!cargando && !error && dataMovies.length === 0 && (
          <p>No se encontraron películas para esa búsqueda.</p>
        )}

        <div className="cards-grid">
          {dataMovies.map((movie) => (
            <TarjetaPelicula
              key={movie.id}
              data={movie} 
              actualizarFav={this.props.actualizarFav || (() => {})}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
