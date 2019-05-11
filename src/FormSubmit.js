import React from 'react';
import ReactDOM from 'react-dom';



class FormSubmit extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            name: [],
            number: [],
            address: [],
        };
        console.log(props);
    }
    
submitUserData = ()=>{
    const namesUpdate = document.getElementById('name').push[this.state.name];
    const numberUpdate = document.getElementById('number').push[this.state.number];
    const addressUdpate = document.getElementById('address').push[this.state.address];
    this.setState({
        name: namesUpdate,
        number: numberUpdate,
        address: addressUdpate,
    })
    console.log(this.state);
}
    
    render(){
        return (
            <div>
            <form>
                <input type="text" id="name"/>
                <input type="text" id="number"/>
                <input type="text" id="address"/>
                <button id="Submit">Submit</button>
            </form>
            </div>
            )
    }

document.getElementById("Submit").addEventListener("click", function(submitUserData){
    event.preventDefault();
});
}

export default FormSubmit