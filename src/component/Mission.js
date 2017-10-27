import React, { Component } from 'react'
import mission from '../svg/mission.svg'
import colors from '../colors'

class Mission extends Component {

    render() {
        return <div className='flex-column' style={{letterSpacing: '2px'}}>
            <span style={{fontSize: '22px'}}>{this.props.area}</span>
            <div className='flex-row' style={{
                alignItems: 'center',
                borderWidth: '1px 0px', 
                borderStyle: 'solid', 
                borderColor: colors.grayLight,
                margin: '2px 0px 2px 0px',
                padding: '6px 10px'}}>
                <img width='26px' height='26px' src={mission} alt='' />
                <span style={{fontSize: '28px', marginLeft: '12px'}}>{this.props.name}</span>
            </div>
            <span style={{fontSize: '24px', textIndent: '2em'}}>{this.props.summary}</span>
        </div>
    }
}

export default Mission