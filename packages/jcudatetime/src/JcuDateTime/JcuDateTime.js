import React from 'react'

import moment from 'moment'

class JcuDateTime extends React.Component {
    static defaultProps = {
        static: false,
        dateTime: false,
        inputFormat: false,
        outputFormat: 'D MMM YYYY h:mma',
        relative: false
    }

    constructor(props) {
        super(props)
        // we only need live updates if:
        // - we're showing the current time and they didn't say static
        // - we're showing a relative time and they didn't say static
        if (!props.static && ( (props.relative && props.dateTime) || (!props.relative && !props.dateTime) )) {
            setInterval(()=> this.forceUpdate(), 500)
        }
    }

    render() {
        const dateTime = this.props.dateTime ? new moment(this.props.dateTime, this.props.inputFormat) : new moment()

        const relative = this.props.dateTime ? new moment(this.props.dateTime, this.props.inputFormat).fromNow() : 'now'
        const nonrelative =<>{ dateTime.format(this.props.outputFormat)}</>

        return ( this.props.relative ? relative : nonrelative )
    }
}

export default JcuDateTime