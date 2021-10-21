import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import { render } from 'react-dom';
// uppcase for component, lower else


class App extends React.Component {
    constructor() {
        super()
        // for super and constructors, check out advanced objects
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // doing the (event) => arrow functions makes it to "this" refers to the app and not what the "this" meant on each component. Without this it would refer to the input file in searchbox.js
        this.setState({ searchfield: event.target.value })
            // anytime we want to change state we must do this.setState. We want to change the searchfield from the state so we have to set it here. We are changing to to now be event.target.value )
    }

render() {
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
        <div class="tc">
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} /> 
        {/* i can access the robot props from the state after that is declared above */}
        </div>
    );
}
}

export default App;