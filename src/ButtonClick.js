import React from 'react';
import ReactDOM from 'react-dom';



class ButtonClick extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            clicks: 0,
            name: "Owen"
        };
        console.log(props);
    }
    
addToClickCount = ()=>{
    const newClickValue = this.state.clicks + 1;
    this.setState({
        clicks: newClickValue,
        name: `Owen${this.state.clicks}`
    })
    console.log(this.state);
}
    
    render(){
        return (
            <div>
                The button has been clicked {this.state.clicks} times.
                <button onClick={this.addToClickCount}>Click.</button>
            </div>
            )
    }
}

export default ButtonClick