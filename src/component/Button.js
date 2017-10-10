import React, { Component } from 'react'
import colors from '../colors'

const style ={
    img: {
        width: '18px',
        height: '18px',
        marginRight: '4px',
        backgroundColor: colors.dark
    }
}

class Button extends Component {

    render() {
        return <div className='flex-row' style={Object.assign({
            paddingLeft: '5px',
            paddingTop: '3px',
            paddingBottom: '3px',
            alignItems: 'center', 
            backgroundColor: colors.grayLight}, this.props.style)}>
            {this.props.img != null 
                && <img style={style.img} src={this.props.img} alt='' />}
            <span style={{color: colors.dark}}>{this.props.text}</span>
        </div>
    }
}

export default Button