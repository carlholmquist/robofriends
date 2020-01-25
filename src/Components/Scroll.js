import React from 'react'

const Scroll = (props) => {
    
    return (
        <div style={{ overflowY: 'scroll',  height: '49em'}}>
            {props.children}
        </div>
    );
}

export default Scroll;