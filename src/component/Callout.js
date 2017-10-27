import React, { Component } from 'react'
import colors from '../colors'

class Callout extends Component {

    render() {
        return <div style={Object.assign({
            width: '6px', 
            minHeight: '16px',
            borderStyle: 'solid', 
            borderColor: colors.grayLight, 
            borderWidth: '0px 6px 0px 16px'}, this.props.style)}>
        </div>
    }
}

export default Callout