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
        <div>
            <p>Stopwatch</p>
        </div>
    )
}

// component to display a stopwatch edit form
const StopwatchForm = () => {
    return (
        <div>
            <p>Stopwatch Edit Form</p>
        </div>
    )
}

export default EditableStopwatch