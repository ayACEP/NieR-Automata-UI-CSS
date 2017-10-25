import React, { Component } from 'react'
import colors from '../colors'
import img from '../svg/hline.svg'

class HLine extends Component {

    render() {
        return <div style={Object.assign({
            borderImage: `url(${img}) 0 37 14 round`, 
            borderStyle: 'solid', 
            borderWidth: '0px 40px 14px', 
            borderColor: colors.dark}, this.props.style)}>
        </div>
    }
}

export default HLine