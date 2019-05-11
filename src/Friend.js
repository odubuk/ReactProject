import React from 'react';

function Friend(props) {
    return(
        <div>
          <h1>{props.name}</h1>
          <p>{props.address}</p>
          <p>{props.phone}</p>
          <button id={props.phone} onClick={props.removeFriend}>DELETE</button>
        </div>
        )
}

export default Friend