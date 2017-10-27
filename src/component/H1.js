import React, { Component } from 'react'
import colors from '../colors'

class H1 extends Component {

    render() {
        return <span style={Object.assign({
            color: colors.dark, 
            fontSize: '50px',
            letterSpacing: '2px',
            textShadow: `6px 6px ${colors.grayLight}`}, this.props.style)}>
            {this.props.text}
        </span>
    }
}

export default H1