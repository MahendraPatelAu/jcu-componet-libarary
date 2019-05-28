import React from 'react'

import JcuDateTime from './JcuDateTime';

class Time extends React.Component {
    static defaultProps = {
        static: false,
        time: false,
        inputFormat: false,
        outputFormat: 'h:mma',
        relative: false
    }

    render() {
        return(
            <JcuDateTime 
                static={this.props.static}
                dateTime={this.props.time}
                inputFormat={this.props.inputFormat}
                outputFormat={this.props.outputFormat}
                relative={this.props.relative}
                />
        )
    }
}

export default Time