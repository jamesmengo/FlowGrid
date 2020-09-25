import React from 'react';
import { Grid, TextField, Typography, Button, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';


class EntryPortal extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            title: '',
            description: '',
            priority: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    clearState = () => {
        this.setState( {
            title: '',
            description: '',
            priority: '',
        })
    }

    createEntry = () => {
        const {
            title,
            description,
            priority
        } = this.state;
        if(title.length > 0 && description.length > 0 && priority && priority.length > 0) {
            const newEntry = {title, description, priority};
            axios.post('http://localhost:8080/api/entries', newEntry)
                .then(res => {
                    this.clearState();
                    this.props.updateData(priority,newEntry)
                }).catch((e) => {
                    console.log(e);
                })
        }
    }

    render() {
        return (
            <Grid container item xs={4}>
                <Grid item xs={12} container direction='column'>
                    <Typography variant="h6" align="left">
                        Title
                    </Typography>
                    <TextField variant="outlined" value={this.state.title} onChange={this.handleChange} name="title"/>
                </Grid>
                <Grid item xs={12} container direction='column'>
                    <Typography variant="h6" align="left">
                        Description
                    </Typography>
                    <TextField variant="outlined" value={this.state.description} onChange={this.handleChange} name="description"/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" align="left">
                        Priority
                    </Typography>
                    <Select style={{ width: "100%" }} value={this.state.priority} onChange={this.handleChange} name="priority" ref={this.wrapper}>
                        <MenuItem value="TL">Urgent and Important</MenuItem>
                        <MenuItem value="TR">Urgent and Not Important</MenuItem>
                        <MenuItem value="BL">Not Urgent and Important</MenuItem>
                        <MenuItem value="BR">Not Urgent and Not Important</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <Button colour="primary" variant="contained" fullWidth onClick={this.createEntry}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default EntryPortal;