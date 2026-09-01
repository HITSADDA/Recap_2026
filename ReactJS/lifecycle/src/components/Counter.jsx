import React, { Component } from 'react'

export default class Counter extends Component {
    // Runs before the component is mounted, used to initialize state and bind methods
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // Runs after the component is mounted, used to fetch data or set up subscriptions
    componentDidMount() {
        console.log('Counter component has mounted');
    }

    // Runs after the component is updated, used to perform side effects based on state or prop changes
    componentDidUpdate(prevProps, prevState) {
        console.log('Counter component has updated: ', prevState.count, ' -> ', this.state.count);
        console.log('Counter component has updated');
    }

    // Runs before the component is unmounted, used to clean up subscriptions or timers
    componentWillUnmount() {
        console.log('Counter component will unmount');
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                {/* <button onClick={() => this.increment()}>Increment</button> */}
                {/* OR */}
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
        )
    }
}
