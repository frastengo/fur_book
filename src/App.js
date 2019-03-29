import React, { Component } from 'react';
import Header from '../src/components/Header/Header'
import ProfileList from '../src/components/ProfileList/ProfileList'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      profiles: [],
    }


  }

  componentDidMount(){
    this.getProfiles();
  }

  getProfiles = () => {
    axios.get("/api/profiles").then(res => {
      console.log(res.data.profiles)
      this.setState({
        profiles: res.data.profiles,
      });
    })
  }

  render() {
    const {profiles} = this.state
    return (
      <div className="App">
        <Header />
        <ProfileList profiles={profiles}/>

      </div>
    );
  }
}

export default App;
