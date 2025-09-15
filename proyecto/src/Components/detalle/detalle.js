import React, {Component} from 'react';
import "../../Screens/styles.css"

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:null,
            

        }
    }

    componentDidMount (){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=e4c9de46fa2b077570ba8601a80bf4d6`)
        .then(res => res.json())
        //  .then(data => console.log(data)) 
         .then(data => this.setState({data: data}) )
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
            
            <div>
            <h2 class="alert alert-primary">{this.state.data.title}</h2>
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`} alt=""/>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description" >{this.state.data.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.data.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.data.runtime}</p>
                <p class="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.data.vote_average}</p>
                <h4>Géneros</h4>
                <ul>
                    {generos}
                </ul>
            </section>
        </section>
        </div>
        )
    }

}

export default Detalle