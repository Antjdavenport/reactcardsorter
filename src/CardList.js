import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => { 
    // gets robots as a prop as it was passed in robots={robots}
 
    return (
        <div>
       {robots.map((user, i) => {
        // using a .map to loop over all the cards. We need to add a key so the virtual 
        // DOM can track each card i.e if one gets deleted react will know which one
        return (
            <Card key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
                //  i is the index within the map
         )
    })}
       </div>
    );
}

export default CardList;