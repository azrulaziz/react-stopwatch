import React, { Component } from 'react';
import StopwatchList from './StopwatchList'

// parent component to act as a container for both StopwatchList and AddStopwatchForm
class StopwatchDashboard extends Component {

    render() {
        return (
            <div>
                <StopwatchList />
            </div>
        )
    }
}


export default StopwatchDashboard