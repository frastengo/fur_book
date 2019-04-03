import React, { Component } from 'react';
import Header from '../src/components/Header/Header'
import ProfileList from '../src/components/ProfileList/ProfileList'
import Friends from '../src/components/Friends/Friends'
import Display from './components/Display/Display'
import NewProfile from '../src/components/NewProfile/NewProfile'
// import Welcome from './components/Welcome/Welcome'

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      profiles: [],
      currentProfile: [],
      friends: [],
      value: "",
      showForm: false,
      newProfile: null,
    }
  }

  componentDidMount(){
    this.getProfiles();
  }

  getProfiles = () => {
    axios.get("/api/profiles").then(res => {
      console.log("success")
      this.setState({
        profiles: res.data.profiles,
      })
    }).catch((error)=> {console.log('Error')})
  }

  meet = (profile) => {
    let displayedProfile = [...this.state.currentProfile, profile]
    console.log(displayedProfile[0])
    this.setState({
      currentProfile: [profile]
    })
  }

  add = (profile) => {
    axios.post('/api/profiles/friends', profile).then(res => {
      console.log('Success')
      this.setState({
        friends: res.data,
      })
    }).catch((error)=> {console.log('Error')})
  }

  addProfile = (newProfile) => {
    axios.post('/api/profiles', newProfile).then(res => {
          console.log("Success")
          this.setState({
              profiles: res.data.profiles,
              newProfile: res.data.profiles.pop(),
          })
      }).catch((error)=>{console.log('Error creating new profile')})
  }

  delete = (id, newProfile) => {
    axios.delete(`/api/profiles/${id}`).then(res => {
      console.log('Success deleting profile')
      this.setState({
        friends: res.data
      })
    }).catch((error)=> {console.log('Error in deleting profile')})
  }

  editProfile = (id, edittedprofile) => {
    axios.put(`/api/profiles/${id}`, edittedprofile).then(res => {
      this.setState({
        profiles: res.data.profiles
      })
    }).catch((error)=> {console.log('Error in Delete')})
  }


  displayForm=(e)=>{
    this.setState({
      showForm: true,
    })
  }

  cancel=(e)=>{
    this.setState({
      showForm: false,
    })
  }


  render() {
    console.log(this.state.newProfile)
     
    
    const {profiles, friends, currentProfile} = this.state
    return (
      <div className="bigcontainer">
        <div className="App">
          <Header />
          <div classname="main-container">
            <div className='main'>
              <div className="create-new">
                
                <button className='create' onClick={this.displayForm} >Create New Profile Bitches!</button>
                <div>
                  { this.state.showForm &&
                    <NewProfile newProfile={this.state.newProfile} cancel={this.cancel} addProfile={this.addProfile} editProfile={this.editProfile}/>
                  }
                </div>
              </div>
              <div className="display-container">
                <ProfileList profiles={profiles} meet={this.meet}/>
                <Display currentProfile={currentProfile} add={this.add}/>
                <Friends friends={friends} delete={this.delete} handleChange={this.handleChange} value={this.value}/>
              <footer className='footer-container'><div className='footer'></div></footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
