import React, {Component} from 'react';
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import "./VerTodasTopRating.css"

class VerTodasTopRating extends Component {
    constructor () {
        super ()
        this.state= {
             peliculas: [],
             listaCompleta: [],
             pag: 1,
        };
    }

    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e4c9de46fa2b077570ba8601a80bf4d6&page=1")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => this.setState({peliculas: data.results, listaCompleta: data.results}))
        .catch(e => console.log(e))
    }

    cargarMas() {
        let siguientePag = this.state.pag + 1;
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=e4c9de46fa2b077570ba8601a80bf4d6&page=${siguientePag}`)
        .then(res => res.json())
        .then(data => {
            let todasLasPelis = this.state.listaCompleta.concat(data.results);
            this.setState({
                peliculas: todasLasPelis,
                listaCompleta: todasLasPelis,
                pag: siguientePag
            });
        })
        .catch(e => console.log(e))
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    filtrarContenido(event) {
        let texto = event.target.value.toLowerCase();
        let todas = this.state.listaCompleta;
        this.setState({busqueda: event.target.value});

        let filtradas = this.state.listaCompleta.filter((peli) => peli.title.toLowerCase().includes(texto))

        console.log(texto, filtradas)

        this.setState({
            peliculas: filtradas
        })
    }


    render() {
        return(
            <div className="pageTopRated">

                <form onSubmit={(e) => this.evitarSubmit(e)} className="searchBar">
                    <input type='text' placeholder='Buscar por título...' value={this.state.busqueda} onChange={(e) => this.filtrarContenido(e)}/>
                </form>

                {
                    this.state.peliculas.length === 0 ? <h1>Cargando...</h1> : 
                    <div  className="moviesGrid">
                        {this.state.peliculas.map((elm, idx) => <TarjetaPelicula data={elm} key={idx + elm.title}/>)}
                    </div>
                }
                <div className="loadMore">
                    <button onClick={() => this.cargarMas()} className="btn btn-ghost"> Cargar más </button>
                </div>
            </div>
        ); 
    }
}

export default VerTodasTopRating


