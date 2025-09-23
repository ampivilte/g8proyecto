import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../../Screens/styles.css"


class TarjetaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerDescripcion: 0,
            esFavorito: false

        }
        console.log(this.props);
    }
    VerDescripcion() {
        this.setState({ VerDescripcion: 1 })
    }
    OcultarDescripcion() {
        this.setState({ VerDescripcion: 0 })
    }
    agregarFav(id) {
        let local = localStorage.getItem('favoritos');
                let storageParseado = [];
                if (local !== null) {
                storageParseado = JSON.parse(local);
               }
           if (!storageParseado.includes(id)) {
                   storageParseado.push(id);
               }
                localStorage.setItem('favoritos', JSON.stringify(storageParseado));
                this.setState({ esFavorito: true });
                   if (this.props.actualizarFav) {
                        this.props.actualizarFav(storageParseado, id);
                }
    }
    sacarFav(id) {
        let local = localStorage.getItem('favoritos');
        let storageParseado = [];
        if (local !== null) {
            storageParseado = JSON.parse(local);
        }
        let nuevo = [];
        for (let i = 0; i < storageParseado.length; i++) {
            if (storageParseado[i] !== id) {
                nuevo.push(storageParseado[i]);
            }
        }
        localStorage.setItem('favoritos', JSON.stringify(nuevo));
        this.setState({ esFavorito: false });
        if (this.props.actualizarFav) {
            this.props.actualizarFav(nuevo, id);
        }
    }


    render() {
        return (

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
                        <h5> <Link to={`/detalle/pelicula/${this.props.data.id}`} className="link-detalle">Ver</Link></h5>
                        {this.state.esFavorito
                          ? <button onClick={() => this.sacarFav(this.props.data.id)} className="btn-custom">❌</button>
                          : <button onClick={() => this.agregarFav(this.props.data.id)} className="btn-custom">❤️</button>}

                    </div>
                </div>
            </article>

        )

    }
}

export default TarjetaPelicula