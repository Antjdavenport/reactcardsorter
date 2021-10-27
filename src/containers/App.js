import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import { render } from 'react-dom';
// uppcase for component, lower else


class App extends React.Component {
    constructor() {
        super()
        // for super and constructors, check out advanced objects
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
        // "response" is the data, we turn it into json, then pass is back in as "users" to set the state of robots as the data from the URL
    } 
    // componentDidMount part of React lifecycle methods. This is a bit life document on load

    onSearchChange = (event) => {
        // doing the (event) => arrow functions makes it to "this" refers to the app and not what the "this" meant on each component. Without this it would refer to the input file in searchbox.js
        this.setState({ searchfield: event.target.value })
            // anytime we want to change state we must do this.setState. We want to change the searchfield from the state so we have to set it here. We are changing to to now be event.target.value )
    }

render() {

    // const robots = this.state.robots;
    // const searchfield = this.state.searchfield;
    const {robots, searchfield} = this.state;
    // look up destructuring. By using this I can now call robots and searchfield without having to do this.state.robots etc
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (robots.length === 0 ) {
        return <h1>Loading...</h1>
    }
    // if the fetch takes too long then it will display this
    else {
        return (
        <div class="tc">
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
       <Scroll> 
           {/* here i am wrapping the card list in the scroll component */}
        <CardList robots={filteredRobots} /> 
        {/* i can access the robot props from the state after that is declared above */}
       </Scroll>
        </div>
    );
        }
}
}

export default App;