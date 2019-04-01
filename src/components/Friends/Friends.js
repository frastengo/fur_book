import React, {Component} from 'react'
import Friend from '../Friend/Friend'

export default class Friends extends Component{
    constructor(props){
        super(props)

        this.state ={
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.editFriend(this.state.message);
        this.setState({
            message: '',
        })

    } 





    render(){
        console.log('this.props', this.props.friends)
        console.log('this.state', this.state.friends)
        const {friends} = this.props
        const friendList = friends.map((friend, index) => {
            return (
                <div className="friends-1" key={index}>
                    <Friend friend={friend} delete={this.props.delete} id={friend.id} handleChange={this.handleChange} onSubmit={this.onSubmit} value={this.state.message}/>
                </div>
            )
        })
        console.log('FRIENDS', this.state.friends)
        return <div className="friends-2" key={friends.id}>{friendList}</div>
    }
}