import { Component } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { Stylesheet } from "/Component/Home/Greeting/Style";
import { Stylesheet } from "./Style";
import {withStyles} from "@mui/styles"

class Greeting extends Component{
        constructor(props){
            super(props)
        }
    render(){
        const { classes } = this.props 
        return(
                <div className={classes.container}>
                    <h1>Values from {this.props.name} </h1>
                    <hr/>
                    <h1>We Can Add Button From Matirial ui </h1>
                    <h1>But We must Import it</h1>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success"> Success</Button>
                    <Button variant="outlined" color="error">Error</Button>
                    <hr/>
                    <br/>

                    <h2>We Can Add Image </h2>
                    <img src="https://loremflickr.com/640/360"/>
                </div>
        );
            
    }
}
export default withStyles(Stylesheet)(Greeting);