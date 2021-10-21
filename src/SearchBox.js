import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
        <input class="pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="search the robots" 
        onChange={searchChange}
        // this on change will fire just like a regular HTML event, and will pass the data back to the parent (App). This is how you pass info back in the one flow model so it can be used by another component
        />
        </div>
    );
}

export default SearchBox;