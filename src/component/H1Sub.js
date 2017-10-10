import React, { Component } from 'react'
import colors from '../colors'

class H1Sub extends Component {
    
    render() {
        return <span style={Object.assign({
            color: colors.dark,
            fontSize: '14px'}, this.props.style)}>
            {this.props.text}
        </span>
    }
}

export default H1Sub