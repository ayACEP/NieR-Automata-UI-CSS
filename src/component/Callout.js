import React, { Component } from 'react'
import colors from '../colors'

class Callout extends Component {

    render() {
        return <div style={Object.assign({
            width: '4px', 
            minHeight: '16px',
            borderStyle: 'solid', 
            borderColor: colors.grayLight, 
            borderWidth: '0px 2px 0px 8px'}, this.props.style)}>
        </div>
    }
}

export default Callout