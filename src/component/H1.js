import React, { Component } from 'react'
import colors from '../colors'

class H1 extends Component {

    render() {
        return <span style={Object.assign({
            color: colors.dark, 
            fontSize: '32px',
            letterSpacing: '2px',
            textShadow: `4px 4px ${colors.grayLight}`}, this.props.style)}>
            {this.props.text}
        </span>
    }
}

export default H1