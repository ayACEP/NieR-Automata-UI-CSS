import React, { Component } from 'react'
import colors from '../colors'
import style from './Button.css'
import $ from 'jquery'

class Button extends Component {

    componentDidMount() {
        $('.button-hover')
        .on('mouseenter', (e) => {
            $(e.target).siblings('.button-cover')
                .animate({width: '100%'}, {queue: false, duration: 'fast'})
        })
        .on('mouseleave', (e) => {
            $(e.target).siblings('.button-cover')
                .animate({width: '0%'}, {queue: false, duration: 'fast'})
        })
    }

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
        const textStyle = {
            color: colors.dark,
            fontSize: small ? '20px' : '24px'
        }
        return <div className='flex-column' style={Object.assign({height: height}, this.props.style)}>
            <div style={{
                flex: 1,
                backgroundColor: colors.grayLight}}>
            </div>
            <div className='button-cover' style={{
                flex: 1,
                width: '0px',
                marginTop: '-' + height,
                backgroundColor: colors.grayStrong}}>
            </div>
            <div className='button-hover' style={{
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