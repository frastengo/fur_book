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
      newProfiles: [],
      // showCreate: true,
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
    // console.log("PROFILE", profile);
    // const newFriend = {
    //   name: profile.name,
    //   age: profile.age,
    //   breed: profile.breed,
    //   image: profile.image,
    // };
    // console.log('here!!!!', newFriend)
    axios.post('/api/profiles', profile).then(res => {
      console.log('profile', profile)
      this.setState({
        friends: res.data,
        // friends: [...this.state.friends, profile]
      })
    }).catch((error)=> {console.log('Error')})
    // this.setState({
    //   friends: [...this.state.friends, profile]
    // })
  }

  addProfile = (newProfile) => {
    console.log('NEW PROFILEE!', newProfile)
    axios.post('api/profiles', newProfile).then(res => {
          console.log("Added new profile");
          // console.log(res.data);
          this.setState({
              newProfiles: res.data,
              profiles: [...this.state.profiles, newProfile]
          })
      }).catch((error)=>{console.log('Error creating new profile')})
  }
  







  // delete = (index) => {
  //     let friendsCopy = this.state.friends.slice();
  //     friendsCopy.splice(index, 1);
  //     this.setState({
  //       friends: friendsCopy
  //     });
  // }

  delete = (id) => {
    axios.delete(`/api/profiles/${id}`).then(res => {
      this.setState({
        // myFriends: res.data,
        friends: res.data
      })
    }).catch((error)=> {console.log('Error in Delete')})
  }

  edit = (id) => {
    axios.put(`/api/profiles/${id}`).then(res => {
      this.setState({
        // myFriends: res.data,
        friends: res.data
      })
    }).catch((error)=> {console.log('Error in Delete')})
  }

  // editFriend = (message) => {
  //   const newTodo ={
  //     id: 4,
  //     title,
  //     completed: false
  //   }
  //   this.setState({
      
  //     todos: [...this.state.todos, newTodo]
  //   })
  // }

  displayForm=(e)=>{
    this.setState({
      showForm: true,
      // showCreate: false,
    })
  }

  cancel=(e)=>{
    this.setState({
      showForm: false,
    })
  }

  // edit = (profile.id) => {

  // }
  


  //       // name: this.state.name,
  //       // age: this.state.age,
  //       // breed:this.state.breed,
  //   })
  //       .then(res => {
  //           // console.log(res);
  //           // console.log(res.data);
  //           this.setState({
  //               movies:[this.state.name,this.state.type,this.state.description, this.state.id]
  //           })
  //       })
  // }
  








  render() {
    console.log('MYFRIENDS', this.state.myFriends)
    console.log('IN APP JS', this.state.friends);
    const {profiles, friends, currentProfile} = this.state
    return (
      <div className="App">
        <Header />
        <div classname="main-container">
          <div className='main'>
            <div className="create-new">
              <button className='create' onClick={this.displayForm} >Create New Profile</button>
              <div>
                { this.state.showForm &&
                  <NewProfile cancel={this.cancel} addProfile={this.addProfile} edit={this.editProfile}/>
                }
              </div>
            </div>
            <div className="display-container">
              <ProfileList profiles={profiles} meet={this.meet}/>
              <Display currentProfile={currentProfile} add={this.add}/>
              <Friends friends={friends} delete={this.delete} handleChange={this.handleChange} value={this.value}/>
            </div>
            <footer className='footer'>im the footer</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
