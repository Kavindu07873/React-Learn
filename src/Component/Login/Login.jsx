import { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import GDSEButton from "../Home/Button/GDSEButton";

// import GDSEButton from "../Home/Button/GDSEButton";
import GDSEButton from "../Home/Button/GDSEButton";
import GDSESnackBar from "../Home/SnackBar/SnackBar";

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            UserName : 'admin',
            PassWord : '1234',

            FormData : {
                User_Name:'',
                PassWord:''
            },
            open: false,
            message: '',
            severity: ''

        }

    }
    
    checkValidity(){
        console.log(this.state.FormData)

        if(this.state.UserName == this.state.FormData.User_Name){
           if(this.state.PassWord == this.state.FormData.PassWord){
            console.log('Login SucessFull');
            this.setState({
                open: true,
                message: 'User credential matching sucess!',
                severity: 'success'
            })

            // <Alert severity="success">This is a success alert — check it out!</Alert>

           }else{
            console.log('Check PassWord');
            this.setState({
                open: true,
                message: 'User credential not matching!',
                severity: 'error'
            })
           }
        }else{
            console.log('Check UserName');
            this.setState({
                open: true,
                message: 'User credential not matching!',
                severity: 'error'
            })
        }
     
    }
    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <TextField
                     id="outlined-basic"
                     label="UserName"
                     variant="outlined"
                     onChange={(e)=>{
                            console.log(e.target.value)
                            let FormData = this.state.FormData
                            FormData.User_Name = e.target.value
                            this.setState({FormData}) 
                     }
                    }
                     />
                <hr/>
                <TextField
                     id="outlined-basic"
                     label="PassWord"
                     variant="outlined"
                     onChange={(e)=>{
                        console.log(e.target.value)

                        let FormData = this.state.FormData
                        FormData.PassWord = e.target.value
                        this.setState({FormData}) 
                    }
                }
                     />
                <br/>
                <br/>
                <br/>

                {/* <Button
                    variant="contained" 
                    color="success"
                    onClick={()=>{
                        console.log(this.state.UserName )
                        console.log(this.state.PassWord )
                       this.checkValidity()
                       
                    }}
                    > Success</Button> */}
                <div>
                        <GDSEButton
                            variant="contained"
                            label="Login"
                            onClick={() => {
                                this.checkValidity()
                            }}
                        />
                </div>


                <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
                    
            </div>
        )
    }
}
export default Login;