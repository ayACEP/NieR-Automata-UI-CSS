import React, { Component } from 'react'
import colors from '../colors'
import style from './Button.css'
import $ from 'jquery'

class Button extends Component {

    render() {
        const height = '38px'
        const small = this.props.type === 'small'
        const imgWidth = small ? '24px' : '26px'
        const imgStyle = {
            width: imgWidth,
            height: imgWidth,
            marginRight: '7px',
            marginLeft: '7px',
            backgroundColor: colors.dark
        }
        return <a className='flex-row nier-button' style={Object.assign({
            height: height,
            fontSize: small ? '20px' : '24px'}, this.props.style)}>
            <div className='nier-button-content'>
                {this.props.img != null && <img style={imgStyle} src={this.props.img} alt='' />}
                <span>{this.props.text}</span>
            </div>
        </a>
    }
}

export default Button