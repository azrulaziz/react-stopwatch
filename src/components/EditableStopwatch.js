import React, { Component } from 'react';

// components to display either a stopwatch or a stopwatch edit form
class EditableStopwatch extends Component {

    render() {
        return (
            <div>
                <Stopwatch />
                <StopwatchForm />
            </div>
        )
    }
}

// component to display a single stopwatch
const Stopwatch = () => {
    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <h2>Task Title</h2>
            <p>Task description</p>
            <h3>01:00:00</h3>
            <button>Start</button>
        </div>
    )
}

// component to display a stopwatch edit form
const StopwatchForm = () => {
    return (
        <div>
            
        </div>
    )
}

export default EditableStopwatch