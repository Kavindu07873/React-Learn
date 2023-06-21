import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../Home/Button/GDSEButton";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PostService from "../service/PostService";
import GDSESnackBar from "../Home/SnackBar/SnackBar";
import GDSEDataTable from "../Home/Table/Table"

//we use post form from this project to end data back end 
// other two pages combine with this page
//becouse we must use othere 2 pages to do properly
// PostService.js AND axio.js
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: '',
                id: '',
                title: '',
                body: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            loaded: false,

            
            //for data table
            columns: [
                {
                    field: 'id',
                    headerName: 'Post Id',
                    width: 70
                },
                {
                    field: 'userId',
                    headerName: 'User Id',
                    width: 130
                },
                {
                    field: 'title',
                    headerName: 'Title',
                    width: 500,
                    sortable: false
                },
                {
                    field: 'body',
                    headerName: 'Body',
                    width: 620
                },
            ]

        }

    }
    async loadData(){

            let ress = await PostService.fetchPosts();
           
           console.log(JSON.stringify(ress))
            if (ress.status === 200) {
                this.setState({
                    loaded: true,
                    data: ress.data
                })


                //ena values object eka json karanawa
                console.log(JSON.stringify(ress.data))
            } else {
               
            }

    }
    //we can use life cycle method in react
    //
    componentDidMount(){
        console.log("Component eka mount Wenawa")
        //meken api get eken backend eken data gannawa
        this.loadData()
    }
    componentWillUnmount(){
        console.log("Component eka ain venawa")
    }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })
        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity : 'error'
                // <Alert severity="error" />

            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Poster Manage
                </Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={0.5}>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">User Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                // placeHolder="User Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userId = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                // placeHolder="Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                validators={['required']}
                                value={this.state.formData.id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.id = e.target.value
                                    this.setState({ formData })
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">Title</Typography>
                            <TextValidator
                                id="outlined-basic"
                                // placeHolder="Title"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Body</Typography>
                            <TextValidator
                                id="outlined-basic"
                                // placeHolder="Body"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.body}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.body = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex' }} justifyContent="flex-end" >
                            <GDSEButton size="small" variant="contained" label="save" type="submit" />
                        </Grid>
                    </Grid>
                </ValidatorForm>

    {/* created loaded variable in the state. inside the loadData method if only data loaded from the API,
                                set loaded variable true. below table is render only loaded == true */}
                {this.state.loaded &&
                    <Grid container style={{ height: 400, width: '100%', marginTop: '50px' }}>
                        {/* <BasicPostTable data={this.state.data} /> */}
                        <GDSEDataTable
                            columns={this.state.columns}
                            rows={this.state.data}
                            rowsPerPageOptions={5}
                            pageSize={5}
                            // checkboxSelection={true}
                        />
                    </Grid>
                }
            


                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Posts)