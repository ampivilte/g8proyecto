import React, {Component}from 'react';
import { Link } from "react-router-dom"
import "../../Screens/styles.css"


class TarjetaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerDescripcion : 0,
            
        }
        console.log(this.props);
    }
     VerDescripcion (){
        this.setState({VerDescripcion:1})
    }
    OcultarDescripcion() {
        this.setState({VerDescripcion:0})
    }
    

      

        render() {
        return(

            <article class="single-card-movie">
                    <img 
                    className="cardimg"
                    src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} 
                    alt={this.props.data.title}
                    />
                <div className="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    {this.state.VerDescripcion === 0?
            <button class="btn btn-primary" onClick= {() => this.VerDescripcion()}> Ver descripcion</button>:
            <button class="btn btn-primary" onClick= {() => this.OcultarDescripcion()}>Ocultar descripcion</button>}
            {this.state.VerDescripcion === 1?
                <p>{this.props.data.overview}</p>:
                <p></p>}
                    
                    <h5> <Link to ={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>
                </div>
            </article>

        )
        }
}

export default TarjetaPelicula