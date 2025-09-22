import React, {Component}from 'react';
import { Link } from "react-router-dom";
import "../../Screens/styles.css";


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
    agregarFav(id){
        let local = localStorage.getItem('favoritos');
      
        if(local !== null){
          let storageParseado = JSON.parse(local);
          storageParseado.push(id);
      
          //acá estoy llamando a la función sólo si existe
          if (this.props.actualizarFav) {
            this.props.actualizarFav(storageParseado);
          }
      
          let String = JSON.stringify(storageParseado);
          localStorage.setItem('favoritos', String);
        } else {
          let array = [id];
      
          if (this.props.actualizarFav) {
            this.props.actualizarFav(array);
          }
      
          let String = JSON.stringify(array);
          localStorage.setItem('favoritos', String);
        }
      }
    sacarFav(id){
        let local = localStorage.getItem('favoritos')
        let storageParseado = JSON.parse(local)
        let filtrado = storageParseado.filter((elm) => elm !== id)
        this.props.actualizarFav(filtrado)
        let String = JSON.stringify(filtrado)
        localStorage.setItem('favoritos',String)

        

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
            <button className="btn btn-primary" onClick= {() => this.VerDescripcion()}> Ver descripcion</button>:
            <button className="btn btn-primary" onClick= {() => this.OcultarDescripcion()}>Ocultar descripcion</button>}
            {this.state.VerDescripcion === 1?
                <p>{this.props.data.overview}</p>:
                <p></p>}
                    
                    <h5> <Link to ={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>
                    {this.props.favorito? <button onClick={()=> this.sacarFav(this.props.data.id)}>Quitar de favoritos</button>:
                    <button onClick={()=> this.agregarFav(this.props.data.id)}>Agregar a favoritos</button>}
                </div>
            </article>

        )

        }
}

export default TarjetaPelicula;