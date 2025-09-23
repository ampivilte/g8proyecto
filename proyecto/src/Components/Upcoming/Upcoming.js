import React, {Component} from 'react';

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula';
import "../../Screens/styles.css"

const api_key = 'e4c9de46fa2b077570ba8601a80bf4d6'

class Upcoming extends Component {
    constructor () {
        super ()
        this.state= {
            peliculas: [],
            favoritos: localStorage.getItem('favoritos') !==null ? localStorage.getItem('favoritos'): []

        }
    }
    componentDidMount () {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => this.setState({peliculas : data.results}))
        .catch(e => console.log(e))
    }
    actualizarFav(array){
        this.setState({favoritos: array})
    }

    render(){
        let top5 = this.state.peliculas.slice(0,5)
        return (
            <div>
                {this.state.peliculas == null ? <h1>Cargando</h1> : <div> <h1>Proximos estrenos:</h1>
                <section className="row cards" id="movies">
                {
                    top5.map(( elm, idx) => <TarjetaPelicula favorito={this.state.favoritos.includes(elm.id)}  actualizarFav={(array) => this.actualizarFav(array)}  data= {elm}  key={idx + elm.title}/>)
                
                }
                 </section>
                 <h5> <Link to ={`/VerTodasUpcoming`} className="link-ver-todas">Ver Todas</Link></h5>
                </div>
                }
                
            </div>
        )
    }
}

export default Upcoming