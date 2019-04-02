import React, {Component} from 'react';
import DisplayNew from '../DisplayNew/DisplayNew'
import './NewProfile.css'



export default class NewProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            age: '',
            breed: '',
            image: '',
            // imagedefault: 'http://visualwebs.net/img/placeholder-image.png',
            newProfile: props.newProfile,
            showForm: true,
            showEdit: false,
            
            
        }
    }

    handleName = e => {
        this.setState({
            name: e.target.value
        })
    }
    handleAge = e => {
        this.setState({
            age: e.target.value
        })
    }
    handleBreed = e => {
        this.setState({
            breed:e.target.value
        })
    }
    handleImage = e => {
        this.setState({
            image :e.target.value
        })
    }

    
    onSubmit = e => {
        e.preventDefault();
        let newProfile = {name: this.state.name, age: this.state.age, breed:this.state.breed, image: this.state.image}
        this.props.addProfile(newProfile)
        this.setState({
            // newProfile: [newProfile],
            showForm: false,
        })
    }

    onEdit = e => {
        e.preventDefault();
        let edittedProfile = {
            name: this.state.name,
            age: this.state.age,
            breed: this.state.breed,
            image: this.state.image
        }
        this.props.editProfile(this.props.newProfile.id, edittedProfile)

        this.setState({
            newProfile: edittedProfile,
            showEdit: false,
        })
    }

    edit = (e) => {
        this.setState({
            showEdit: true,
        })



    }

   

    render(){
        console.log('from new profile' ,this.state.newProfile)
        const {name, age, breed, image} = this.state
        const newProfile = [{name: name, age: age, breed: breed, image: image}]
        const mappedNewProfile = newProfile.map(profile => {
            return (
                <DisplayNew edit={this.edit} profile={profile} editProfile={this.onEdit}/>
            )})
        return(
            <div>
            {this.state.showForm &&
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder='Name'
                        // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                        value={name}
                        onChange={this.handleName}
                    />
                    <input 
                        type="text" 
                        placeholder='Breed'
                        // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                        value={breed}
                        onChange={this.handleBreed}
                    />
                    <input 
                        type="text" 
                        placeholder='Age'
                        // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                        value={age}
                        onChange={this.handleAge}
                    />
                    <input 
                        type="text" 
                        placeholder='Image URL'
                        // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                        value={image}
                        onChange={this.handleImage}
                    />
                    <input  
                        type="submit"
                        value="Submit"
                        className="btn-submit-new"
                        // style={{flex: '1', fontSize: '14px', border: '1px solid black'}}
                    />
                    <button onClick={this.props.cancel}>Cancel</button>
               </form>
            }
                    {this.state.showEdit &&
                    <form className="form" onSubmit={this.onEdit}>
                        <input 
                            type="text" 
                            placeholder='Name'
                            // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                            value={name}
                            onChange={this.handleName}
                        />
                        <input 
                            type="text" 
                            placeholder='Breed'
                            // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                            value={breed}
                            onChange={this.handleBreed}
                        />
                        <input 
                            type="text" 
                            placeholder='Age'
                            // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                            value={age}
                            onChange={this.handleAge}
                        />
                        <input 
                            type="text" 
                            placeholder='Image URL'
                            // style={{flex: '10', padding: '5px', fontSize: '14px'}}
                            value={image}
                            onChange={this.handleImage}
                        />
                        
                        <input  
                            type="submit"
                            value="Submit Changes"
                            className="btn-submit-edit"
                            // style={{flex: '1', fontSize: '14px', border: '1px solid black'}}
                        />
                        
                                
                     <button onClick={this.props.cancel}>Cancel</button>
                           </form>
            }
                {mappedNewProfile}
            </div>
            
            
        )
    }
}
