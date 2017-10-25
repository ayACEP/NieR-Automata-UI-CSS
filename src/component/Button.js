import React, { Component } from 'react'
import colors from '../colors'
import style from './Button.css'

class Button extends Component {

    render() {
        const height = '28px'
        const small = this.props.type === 'small'
        const imgWidth = small ? '16px' : '18px'
        const imgStyle = {
            width: imgWidth,
            height: imgWidth,
            marginRight: '5px',
            marginLeft: '5px',
            backgroundColor: colors.dark
        }
        const textStyle = {
            color: colors.dark,
            fontSize: small ? '14px' : '16px',
            animation: 'text 500ms'
        }
        return <div className='flex-column' style={Object.assign({height: height}, this.props.style)}>
            <div style={{
                flex: 1,
                backgroundColor: colors.grayLight}}>
            </div>
            <div style={{
                flex: 1,
                marginTop: '-' + height,
                animation: 'button 1s',
                backgroundColor: colors.grayStrong}}>
            </div>
            <div style={{
                flex: 1,
                marginTop: '-' + height,
                alignItems: 'center'}}>
                {this.props.img != null 
                    && <img style={imgStyle} src={this.props.img} alt='' />}
                <span style={textStyle}>{this.props.text}</span>
            </div>
        </div>
    }
}

export default Button