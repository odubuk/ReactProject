import React from 'react';
import Friend from './Friend';

class MyFriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {friends: [{name: "Owen", phoneNumber: "111-1111", address:"123 Somewhere St"
        }
    ]}
}
    handleFormSubmit = ()=> {
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const newFriends = {
            name,
            phoneNumber,
            address
        }
        this.setState({friends: [...this.state.friends, newFriends]})
        console.log(this.state)
    }

    handleFriendDelete = (e)=> {
        console.log(e.target.id)
        const newFriendsState = this.state.friends.filter(friend=>{
          return friend.phoneNumber !== e.target.id
        });
        console.log(newFriendsState)
        this.setState({friends: [...newFriendsState]})
}
    
render(){
        const myFriendsListHtml = this.state.friends.map((friend, index) =>
            <Friend key={friend.name+ index}
            name={friend.name}
            phone={friend.phoneNumber}
            address={friend.address}
            removeFriend={this.handleFriendDelete}
            id={friend.phoneNumber}/>
        ) 
        return(
            <div>
            {myFriendsListHtml}
              <form>
                <input id="name" placeholder="Name"/>
                <input id="phoneNumber" placeholder="Phone Number"/>
                <input id="address" placeholder="Home Address"/>
              </form>
              <button onClick={this.handleFormSubmit}>Submit</button>
            </div>
            )
        }
    }


export default MyFriendsList