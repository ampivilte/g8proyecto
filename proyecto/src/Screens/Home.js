import React from 'react'
import {Component} from 'react'
import TopRated from '../Components/TopRated/TopRated'
import "./styles.css"


class Home extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div class="container">
                <TopRated/>
            </div>
        )
    }
}
export default Home