import React from 'react';
import ReactDOM from 'react-dom';



class Item extends React.Component{
    constructor (props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <div>
              This is some text above the logo
              The color property is {this.props.color}
              The size property is {this.props.size}
              The appearance property is {this.props.appear}
            </div>
            )
    }
}

export default Item