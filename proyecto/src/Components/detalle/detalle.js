import React, { Component } from 'react';
import "../../Screens/styles.css"
import "./Detalle.css";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,


        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=e4c9de46fa2b077570ba8601a80bf4d6`)
            .then(res => res.json())
            //  .then(data => console.log(data)) 
            .then(data => this.setState({ data: data }))
            .catch(e => console.log(e))
    }
    render() {
        const { data } = this.state;
        if (!data) {
            return <p>Cargando...</p>;
        }
        const generos = [];
        for (let i = 0; i < data.genres.length; i++) {
            generos.push(<li key={data.genres[i].id}>{data.genres[i].name}</li>);
        }

        console.log(data)
        return (

            <div  className="detalle-container">
                <section>
                    <img className="detalle-poster" src={`https://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`} alt="" />
                    <section className="detalle-info">
                        <h2>{this.state.data.title}</h2>

                        <h3>Descripción</h3>
                        <p>{this.state.data.overview}</p>

                        <p id="release-date"><strong>Fecha de estreno:</strong> {this.state.data.release_date}</p>
                        <p><strong>Duración:</strong> {this.state.data.runtime}</p>
                        <p id="votes"><strong>Puntuación:</strong> {this.state.data.vote_average}</p>
                        
                        <h4>Géneros</h4>
                        <ul>
                            {generos}
                        </ul>

                        {this.props.favorito ? <button onClick={() => this.sacarFav(this.props.data.id)}  className="btn-fav">Sacar de  favoritos ❌</button> : <button onClick={() => this.agregarFav(this.props.data.id)} className="btn-fav">Agregar a favoritos ♥️</button>}

                    </section>
                </section>
            </div>
        )
    }

}

export default Detalle