import React, {Component} from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula';
import "../../Screens/styles.css";

class TopRated extends Component {
    constructor () {
        super ()
        this.state= {
            peliculas: [],
            favoritos: localStorage.getItem('favoritos') !==null ? localStorage.getItem('favoritos'): []

        }
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e4c9de46fa2b077570ba8601a80bf4d6")
        .then(res => res.json())
        .then(data => {
            const resultados = data.results;
            const filter = resultados.filter((peliculas, index) => index < 5);
            this.setState({peliculas: filter})})

        .catch(e => console.log(e))
    }
    
    actualizarFav(array){
        this.setState({favoritos: array})
    }

    render(){
        let top5 = this.state.peliculas
        return (
            <div>
                {this.state.peliculas == null ? <h1>Cargando</h1> : <div> <h1>Top Rated:</h1>
                <section class="row cards" id="movies">
                {
                    top5.map(( elm, idx) => <TarjetaPelicula favorito={this.state.favoritos.includes(elm.id)}  actualizarFav={(array) => this.actualizarFav(array)}data= {elm}  key={idx + elm.title}/>)
                
                }
                 </section>
               <h5> <Link to ={`/VerTodasTopRating`} className="link-ver-todas">Ver Todas</Link></h5>
                </div>
                }
                
            </div>
        )
    }
}

export default TopRated