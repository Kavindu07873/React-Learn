import { Component } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Stylesheets } from "./style";
import {withStyles} from "@mui/styles"
import Posts from "../../Posts";

class Countable extends Component{
        constructor(props){
            super(props)
            this.state = {
                count : 10
            }
        }
            inCrementCount(){
                this.setState({
                    count : this.state.count +1
                })
            }


    render(){
        const { classes } = this.props 
        return(
                <div className={classes.containers}>
                    {/* <h1>Values from {this.props.name} </h1> */}
                   <h1>Count : {this.state.count} </h1>
                    <Button
                    
                    variant="contained" 
                    color="success"
                  onClick={()=>{


                    console.log('Press!')
                        this.inCrementCount();
                
                }}
                            > Success
                    </Button>
                    <hr/>

                    <Posts/>
                    <br/>

                  
                </div>
        );
            
    }
}
export default withStyles(Stylesheets)(Countable);