import { Component } from "react";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

const api_key = 'e4c9de46fa2b077570ba8601a80bf4d6';

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state={favoritos: localStorage.getItem('favoritos') !==null ?
            localStorage.getItem('favoritos'): [],
            pelis:[]
        }
    }
    componentDidMount(){
        if(this.state.favoritos !==null){
            let storage = JSON.parse(this.state.favoritos)
            
                storage.map((elm =>
                    fetch(`https://api.themoviedb.org/3/movie${elm}?api_key=${api_key}`)
                    .then(res => res.json())
                    .then(data => this.setState({pelis: this.state.pelis.concat(data)}))
                    .catch(error => console.log(error))
                ))
        
        }
        
    }
    actualizarFav(array){
        this.setState({favoritos:array})
    }
    render(){
        return(
            <div>
                {this.state.pelis !== null ? 
                    this.state.pelis.map(( elm, idx) => <TarjetaPelicula favorito={this.state.favoritos.includes(elm.id)}  
                    actualizarFav={(array) => this.actualizarFav(array)}data= {elm}  key={idx + elm.title}/>)
                        :<h1>No tenes favoritos</h1>}

            </div>
        )
    }
}

export default Favoritos 