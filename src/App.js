import React from 'react';
import './App.css';
import Category from './components/Category';
import 'fontsource-roboto';
import { Grid } from '@material-ui/core';
import EntryService from './service/EntryService';
import EntryPortal from './components/EntryPortal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TL: [],
      TR: [],
      BL: [],
      BR: []
    }
  }
  componentDidMount() {
    this.getEntries();
  }

  async getEntries() {
    const response = await EntryService.retriveAllEntries();
    const { data } = response;
    const tlData = data.filter((entry) => entry.priority === 'urgentImportant');
    const trData = data.filter((entry) => entry.priority === 'urgentNotImportant');
    const blData = data.filter((entry) => entry.priority === 'notUrgentImportant');
    const brData = data.filter((entry) => entry.priority === 'notUrgentNotImportant');
    this.setState({
      TL: tlData,
      TR: trData,
      BL: blData,
      BR: brData
    })
  }

  renderGrid() {
    const {
      TL, TR, BL, BR
    } = this.state;
    return (
      <Grid container item xs={8} spacing={2} style={{margin: "-2px"}}>
        <Grid item xs={6} key="TL">
          <Category priority="TL" data={TL} handleDelete={this.handleDelete} />
        </Grid>
        <Grid item xs={6} key="TR">
          <Category priority="TR" data={TR} handleDelete={this.handleDelete}/>
        </Grid>
        <Grid item xs={6} key="BL">
          <Category priority="BL" data={BL} handleDelete={this.handleDelete}/>
        </Grid>
        <Grid item xs={6} key="BR">
          <Category priority="BR" data={BR} handleDelete={this.handleDelete}/>
        </Grid>
      </Grid>
    )
  }

  updateData = (key, data) => {
    console.log(key, data);
    console.log(this.state[key]);
    const dataArray = this.state[key];
    dataArray.push(data);
    this.setState({
      [key]: dataArray
    })
  }

  handleDelete = async (id) => {
    await EntryService.deleteEntry(id)
    .then(async (res) => {
      await this.getEntries()
    })
    .catch((err) => {
      console.log("Failed to delete the Entry")
    })
  }


  render() {
    return (
      <div className="App">
        <Grid container className="EntryWrapper">
          {this.renderGrid()}
          <EntryPortal updateData={this.updateData}/>
        </Grid>
      </div>
    );
  }
}

export default App;