import React, { Component } from 'react';
import axios from 'axios';
import CamperList from './camper_list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'Recent Campers'
    };
  }

  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {
        this.setState({
          recentCampers: recentCampers.data,
          allTimeCampers: allTimeCampers.data
        });
      }));
  }

  fetchRecentCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }

  fetchAllTimeCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  }

  changeView(view) {
    this.setState({
      currentView: view
    });
  }

  setList() {
    if(this.state.currentView === "Recent Campers") {
      return this.state.recentCampers;
    } else {
      return this.state.allTimeCampers;
    }
  }

  render() {
    return (
      <div>
        <h2>{`Viewing Top ${this.state.currentView}`}</h2>
        <button onClick={() => this.changeView('Recent Campers')} className='btn btn-primary'>Recent</button>
        <button onClick={() => this.changeView('All Time Campers')} className='btn btn-primary'>All Time</button>
        <CamperList campers={this.setList()}/>
      </div>
    );
  }
}
