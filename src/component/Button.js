import React, { Component } from 'react'
import colors from '../colors'

class Button extends Component {

    render() {
        const small = this.props.type === 'small'
        const imgWidth = small ? '16px' : '18px'
        const imgStyle = {
            width: imgWidth,
            height: imgWidth,
            marginRight: '5px',
            backgroundColor: colors.dark
        }
        const textStyle = {
            color: colors.dark,
            fontSize: small ? '14px' : '16px'
        }
        return <div className='flex-row' style={Object.assign({
            height: '28px',
            paddingLeft: '5px',
            alignItems: 'center', 
            backgroundColor: colors.grayLight}, this.props.style)}>
            {this.props.img != null 
                && <img style={imgStyle} src={this.props.img} alt='' />}
            <span style={textStyle}>{this.props.text}</span>
        </div>
    }
}

export default Button