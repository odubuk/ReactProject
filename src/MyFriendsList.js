import React from 'react';

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
        
render(){
        const myFriendsListHtml = this.state.friends.map(friend =>
                                                         
            <div key={friend.name}>
              <h1>{friend.name}</h1>
              <p>{friend.phoneNumber}</p>
              <p>{friend.address}</p>
            </div>
        ) 
        return(
            <div>
            {myFriendsListHtml}
              <form>
                <input id="name" placeholder="Name"/>
                <input id="phoneNumber" placeholder="Phone Number"/>
                <input id="address" placeholder="Address"/>
              </form>
              <button onClick={this.handleFormSubmit}>Submit</button>
            </div>
            )
        }
    }


export default MyFriendsList