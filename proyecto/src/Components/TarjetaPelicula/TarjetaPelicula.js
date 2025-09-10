import React, {Component}from 'react';
import { Link } from "react-router-dom"


class TarjetaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas : 0,
            
        }
        console.log(this.props);
    }
    VerDescripcion (){
        this.setState({VerMas:1})
    }
    OcultarDescripcion() {
        this.setState({VerMas:0})
    }
    

      

        render() {
        return(

            <article class="single-card-movie">
                {/* <img className="cardimg"src={⁠`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`⁠} alt={this.props.data.title}/> */}

                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
            </article>

        )
        }
}

export default TarjetaPelicula