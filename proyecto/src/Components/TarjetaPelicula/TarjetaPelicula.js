import React, {Component}from 'react';
import { Link } from "react-router-dom"
import "../../Screens/styles.css"


class TarjetaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerDescripcion: 0,

        }
        console.log(this.props);
    }
    VerDescripcion() {
        this.setState({ VerDescripcion: 1 })
    }
    OcultarDescripcion() {
        this.setState({ VerDescripcion: 0 })
    }
    agregarFav(id){
        let local = localStorage.getItem('favoritos')
        if(local !==null){
            let storageParseado = JSON.parse(local)
            storageParseado.push(id)
            this.props.actualizarFav(storageParseado,id)
            let String = JSON.stringify(storageParseado)
            localStorage.setItem('favoritos',String)
        }
        else{
            let array= [id]
            this.props.actualizarFav(array,id)
            let String = JSON.stringify(array)
            localStorage.setItem('favoritos',String)
        }
    }
    sacarFav(id){
        let local = localStorage.getItem('favoritos')
        let storageParseado = JSON.parse(local)
        let filtrado = storageParseado.filter((elm) => elm !== id)
        this.props.actualizarFav(filtrado,id)
        let String = JSON.stringify(filtrado)
        localStorage.setItem('favoritos',String)

        

    }
    

      

        render() {
        return(

            <article className="peli-card">
                <img
                    className="cardimg"
                    src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`}
                    alt={this.props.data.title}
                />
                <div className="cardBody">
                    <h5>{this.props.data.title}</h5>
                    {this.state.VerDescripcion === 0 ?
                        <button onClick={() => this.VerDescripcion()} className="btn-custom">Descripción</button> :
                        <button onClick={() => this.OcultarDescripcion()} className="btn-custom">Ocultar descripcion</button>}
                    {this.state.VerDescripcion === 1 ?
                        <p>{this.props.data.overview}</p> :
                        <p></p>}
                    <div className="btn-group">
                        <h5> <Link to={`/detalle/pelicula/${this.props.data.id}`}  className="link-detalle">Ver</Link></h5>
                        {this.props.favorito ? <button onClick={() => this.sacarFav(this.props.data.id)} className="btn-custom">❌</button> : <button onClick={() => this.agregarFav(this.props.data.id)} className="btn-custom">♥️</button>}
                    </div>
                    
                    <h5> <Link to ={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>
                    {this.props.favorito? <button onClick={()=> this.sacarFav(this.props.data.id)}>sacar de  favoritos</button>:<button onClick={()=> this.agregarFav(this.props.data.id)}>Agregar a favoritos</button>}
                </div>
            </article>

        )

    }
}

export default TarjetaPelicula