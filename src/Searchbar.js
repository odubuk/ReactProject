import React from 'react';
import ReactDOM from 'react-dom';



class SearchBar extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
            <ul>
              <input type="text" placeholder="Search..">
            </ul>
            )
    }
}


export default SearchBar