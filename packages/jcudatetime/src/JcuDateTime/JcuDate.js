import React from 'react'

import JcuDateTime from './JcuDateTime';

class JcuDate extends React.Component {
    static defaultProps = {
        static: false,
        date: false,
        inputFormat: false,
        outputFormat: 'DD MMM YYYY',
        relative: false
    }


    render() {
        return(
            <JcuDateTime 
                static={this.props.static}
                dateTime={this.props.date}
                inputFormat={this.props.inputFormat}
                outputFormat={this.props.outputFormat}
                relative={this.props.relative}
                />
        )
    }
}

export default JcuDate