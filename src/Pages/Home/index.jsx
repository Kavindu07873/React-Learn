import { Component } from "react";
// import Button from '../../Component/';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Greeting from "../../Component/Home/Greeting/Greeting";
import { Stylesheet } from "../../Component/Home/Greeting/Style";
import Countable from "../../Component/Home/Countable";
import Login from "../../Component/Login/Login";


class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div>
                    <h1>Hello Home Page</h1>
                    <h1>This is Design By React</h1>
                    <h1>My Name is = {this.props.name}</h1>
                    <h1>My Age is = {this.props.age}</h1>
                    <h1>Lets interduce Greeting  UI</h1>
                    <Greeting name="Greeting"/>
                    {/* <Countable/> */}
                    {/* <Login/> */}
                    
                </div>
        )
            
    }
}
export default HomePage;