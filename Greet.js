import React from 'react';

function Greet(props) {
    return (
        <div className='container card p-3 mt-2  register-container text-center'>
           <h3>Successful Register...!!</h3>
            <h3>Verification send to {props.email}</h3>
        </div>
    );
}

export default Greet;