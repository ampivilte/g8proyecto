import React, {Component} from 'react';
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

class VerTodasTopRating extends Component {
    constructor () {
        super ()
        this.state= {
             peliculas: [],
             listaCompleta: [],
             pag: 1,
             query: ''
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

    render() {
        return(
            <div className="Buscar">
                {
                    this.state.peliculas.length === 0 ? <h1>Cargando...</h1> : 
                    <div>
                        {this.state.peliculas.map((elm, idx) => <TarjetaPelicula data={elm} key={idx + elm.title}/>)}
                        <button onClick={() => this.cargarMas()}> Cargar más </button>
                    </div>
                }
            </div>
        );
    }
}

export default VerTodasTopRating


