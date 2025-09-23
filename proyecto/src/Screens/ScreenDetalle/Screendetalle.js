import React from 'react';
import { Component} from 'react';
import Detalle from '../../Components/Detalle/Detalle';

class ScreenDetalle extends Component {
    constructor (props){
        super(props);
        this.state = {/* data:null */}
    }
    
    render(){
        return(
            <div>
                <Detalle id= {this.props.match.params.id}/>
            </div>
        )
    }
}

export default ScreenDetalle