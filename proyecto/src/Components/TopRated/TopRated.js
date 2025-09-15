import React, {Component} from 'react';

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula';
import "../../Screens/styles.css"

class TopRated extends Component {
    constructor () {
        super ()
        this.state= {
            peliculas: [],

        }
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e4c9de46fa2b077570ba8601a80bf4d6")
        .then(res => res.json())
        .then(data => this.setState({peliculas : data.results}))
        .catch(e => console.log(e))
    }

    render(){
        let top5 = this.state.peliculas.slice(0,5)
        return (
            <div>
                {this.state.peliculas == null ? <h1>Cargando</h1> : <div> <h1>Top Rating Peliculas:</h1>
                <section class="row cards" id="movies">
                {
                    top5.map(( elm, idx) => <TarjetaPelicula   data= {elm}  key={idx + elm.title}/>)
                
                }
                 </section>
               <h5> <Link to ={`/VerTodasTopRating`}>Ver Todas</Link></h5>
                </div>
                }
                
            </div>
        )
    }
}

export default TopRated