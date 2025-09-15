import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

import React, {Component} from 'react';

class VerTodasTopRating extends Component {
    constructor () {
        super ()
        this.state= {peliculas : []}
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e4c9de46fa2b077570ba8601a80bf4d6&page=1")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => this.setState({peliculas : data.results, backup: data.results}))
        .catch(e => console.log(e))
    }


    render() {
        return(
            <div className="Buscar">
                {console.log(this.state.peliculas)}
                
                
                {this.state.peliculas == null ? <h1>Cargando..</h1> : <div>
                {
                    this.state.peliculas.map(( elm, idx) => <TarjetaPelicula  data= {elm}  key={idx + elm.title}/>)
                    
                }
                
                    </div>}
                   
            </div>
        )
    }
}

export default VerTodasTopRating