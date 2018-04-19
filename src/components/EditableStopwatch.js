import React, { Component } from 'react';
import update from 'immutability-helper';

// components to display either a stopwatch or a stopwatch edit form
class EditableStopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stopwatchForm: false,
            stopwatch: {
                title: `Fifa`,
                description: `kick everyone's ass`,
            },
            timer: {
                hour: 0,
                minute: 0,
                seconds: 0,
            }
        }
    }

    handleStopwatchToggle = () => {
        this.setState({stopwatchForm: !this.state.stopwatchForm })
    }

    handleStopwatchForm = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.description.value;
        this.setState({
            stopwatchForm: !this.state.stopwatchForm,
            stopwatch: {
                title: title,
                description: desc
            }
        });
    }

    handleTimer = () => {
        setInterval(() => this.handleSecondsInterval(), 1000);
    }

    handleSecondsInterval = () => {
        const timer = update(this.state.timer, {seconds: {$apply: function(x) {return x + 1}}})

        this.setState({timer});
    }

    render() {
        const {stopwatchForm, stopwatch, timer} = this.state;
        return (
            <div>
                {stopwatchForm ? 
                <StopwatchForm 
                    handleStopwatchToggle={this.handleStopwatchToggle}
                    handleStopwatchForm={this.handleStopwatchForm}
                    title={stopwatch.title}
                    desc={stopwatch.description}
                /> 
                : 
                <Stopwatch 
                    handleStopwatchToggle={this.handleStopwatchToggle}
                    handleTimer={this.handleTimer}
                    title={stopwatch.title}
                    desc={stopwatch.description}
                    hour={timer.hour}
                    minute={timer.minute}
                    seconds={timer.seconds}
                />
                }
            </div>
        )
    }
}

// component to display a single stopwatch
const Stopwatch = (props) => {
    const {title, desc, hour, minute, seconds, handleStopwatchToggle, handleTimer} = props;
    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <h3>{hour}:{minute}:{seconds}</h3>
            <button onClick={handleTimer}>Start</button>
            <p onClick={handleStopwatchToggle}>Edit</p>
            <p>Delete</p>
        </div>
    )
}

// component to display a stopwatch edit form
const StopwatchForm = (props) => {
    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <form onSubmit={props.handleStopwatchForm}>
                <h4>Title</h4>
                <input type="text" name="title" defaultValue={props.title}/>
                <h4>Description</h4>
                <input type="text" name="description" defaultValue={props.desc}/>
                <br />
                <input type="submit" value="update" />
                <input type="submit" value="cancel" onClick={props.handleStopwatchToggle}/>
            </form>
        </div>
    )
}

export default EditableStopwatch