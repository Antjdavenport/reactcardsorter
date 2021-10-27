import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
           {/*  above we are using JSON to to set CSS attributes. Inside this box will be our entire app essentially. */}
            {props.children}
            {/* children passes in every component so we can then wrap components in other ones */}
        </div>
    );
};

export default Scroll;