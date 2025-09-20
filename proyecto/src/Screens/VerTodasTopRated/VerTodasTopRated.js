import React from 'react';
import { Component} from 'react';
import VerTodasTopRating from '../../Components/VerTodasTopRating/VerTodasTopRating';

class ScreenVerTodasTopRating extends Component {
    constructor (props){
        super(props);
        this.state = {/* data:null */}
    }
    
    render(){
        return(
            <div>
                <h1>Top Peliculas</h1>
                <VerTodasTopRating />
            </div>
        )
    }
}

export default ScreenVerTodasTopRating