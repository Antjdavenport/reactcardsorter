import React from 'react';

const Card = (props) => {
    return (
     
       <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
           <img alt='photo of robot' src={`https://robohash.org/${props.id}?200x200`}></img>
           {/* the src is using ES6 template strings to pass in a prop for a dynamic id */}
           <div>
               <h2>{props.name}</h2>
               <p>{props.email}</p>
           </div>
       </div> 
    
    );
    
}

export default Card;