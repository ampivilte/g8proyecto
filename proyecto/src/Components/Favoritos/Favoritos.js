import { Component } from "react";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

const api_key = 'e4c9de46fa2b077570ba8601a80bf4d6';

class Favoritos extends Component {
    constructor(props) {
      super(props);
  
     
      let favIds = [];
      if (localStorage.getItem("favoritos") !== null) {
        favIds = JSON.parse(localStorage.getItem("favoritos"));
      }
  
      this.state = {
        favoritos: favIds, 
        pelis: []
      };
    }
  
    componentDidMount() {
      
      for (let i = 0; i < this.state.favoritos.length; i++) {
        let id = this.state.favoritos[i];
  
        if (id) { 
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-AR`)
            .then(res => res.json())
            .then(data => {
              
              let nuevoArray = this.state.pelis.concat(data);
              this.setState({ pelis: nuevoArray });
            })
            .catch(error => console.log(error));
        }
      }
    }
  
    actualizarFav(arrayActualizado, idQuitado) {
    
      let nuevasPelis = this.state.pelis.filter(p => p.id !== idQuitado);
  
      this.setState({
        favoritos: arrayActualizado,
        pelis: nuevasPelis
      });
  
      localStorage.setItem("favoritos", JSON.stringify(arrayActualizado));
    }
  
    render() {

      
      if (this.state.pelis.length === 0) {
        return <h1>No tenés favoritos</h1>;
      }
  
      return (
        this.state.pelis.length === 0
         ? <h1>No tenés favoritos</h1>
          : <div>
              <h1>Tus Favoritos</h1>
              {this.state.pelis.map((elm) => (
                <TarjetaPelicula
                  key={elm.id}
                  data={elm}
                  favorito={this.state.favoritos.includes(elm.id)}
                  actualizarFav={(array, id) => this.actualizarFav(array, id)}
                />
              ))}
            </div>
      );
    }
  }
  
  export default Favoritos;