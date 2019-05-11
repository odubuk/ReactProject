import React from 'react';
import ReactDOM from 'react-dom';
import './List.css';



class List extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            fruits: ["Fruit1", "Fruit2", "Fruit3"],
            friends: ["Friend1", "Friend2", "Friend3"]}
    }

   
    render(){
        const fruitsHtml = this.state.fruits.map(fruit =>
          <li key ={fruit}>{fruit}</li>
        )
        const friendsHtml = this.state.friends.map(friend =>
          <li key ={friend}>{friend}</li>
        )
        console.log(fruitsHtml)
        return (
            <div className="list">
              This is the fruit list
            <ul>
              {fruitsHtml}
              This is the friend list
              {friendsHtml[0]}
              {friendsHtml[1]}
              {friendsHtml[2]}
            </ul>
            </div>
            )
    }
}


export default List