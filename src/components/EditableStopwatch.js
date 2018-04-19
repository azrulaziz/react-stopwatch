import React, { Component } from 'react';

// components to display either a stopwatch or a stopwatch edit form
class EditableStopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stopwatchForm: false,
        }
    }

    handleStopwatchToggle = () => {
        this.setState({stopwatchForm: !this.state.stopwatchForm })
    }

    render() {
        const {stopwatchForm} = this.state;
        return (
            <div>
                {stopwatchForm ? 
                <StopwatchForm handleStopwatchToggle={this.handleStopwatchToggle}/> : 
                <Stopwatch handleStopwatchToggle={this.handleStopwatchToggle}/>
                }
            </div>
        )
    }
}

// component to display a single stopwatch
const Stopwatch = (props) => {
    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <h2>Task Title</h2>
            <p>Task description</p>
            <h3>01:00:00</h3>
            <button>Start</button>
            <p onClick={props.handleStopwatchToggle}>Edit</p>
            <p>Delete</p>
        </div>
    )
}

// component to display a stopwatch edit form
const StopwatchForm = (props) => {
    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <form>
                <h4>Title</h4>
                <input type="text" name="title"/>
                <h4>Description</h4>
                <input type="text" name="description"/><br />
                <input type="submit" value="update" />
                <input type="submit" value="cancel" onClick={props.handleStopwatchToggle}/>
            </form>
        </div>
    )
}

export default EditableStopwatch