import { Component } from "react";
import TarjetaPelicula from "../../Components/TarjetaPelicula/TarjetaPelicula";

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state={favoritos: localStorage.getItem('favoritos') !==null ? localStorage.getItem('favoritos'): [],
            pelis:[]
        }
    }
    componentDidMount(){
        if(this.state.favoritos !==null){
            let storage = JSON.parse(this.state.favoritos)
            
                for(let i=0; i< storage.length; i++ ){
                    let id = storage[i]
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e4c9de46fa2b077570ba8601a80bf4d6`)
                    .then(res => res.json())
                    .then(data =>{
                        let nuevoArray = this.state.pelis ;
                        nuevoArray.push(data) ;
                        this.setState({pelis: nuevoArray})
                    })
                    .catch(e => console.log(e))
                }
                    
                
        
        }
    }
    actualizarFav(array,id){
        let newFav = this.state.pelis.filter(elm => elm.id !== id)
        this.setState({favoritos:array,pelis:newFav})
    }
    render(){
        return(
            <div>
                {this.state.pelis !== null ? 
                 
                    this.state.pelis.map(( elm, idx) => <TarjetaPelicula favorito={this.state.favoritos.includes(elm.id)}  actualizarFav={(array,id) => this.actualizarFav(array,id)}data= {elm}  key={idx + elm.title}/>)
                
                
                :<h1>No tenes favoritos</h1>}
            </div>
        )
    }
}

export default Favoritos