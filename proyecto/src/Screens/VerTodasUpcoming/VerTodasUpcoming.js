import React from 'react';
import { Component} from 'react';
import VerTodasUpcoming from '../../Components/VerTodasUpcoming/VerTodasUpcoming';

class ScreenVerTodasUpcoming extends Component {
    constructor (props){
        super(props);
        this.state = {/* data:null */}
    }
    
    render(){
        return(
            <div>
                <h1>Próximos Estrenos</h1>
                <VerTodasUpcoming />
            </div>
        )
    }
}

export default ScreenVerTodasUpcoming