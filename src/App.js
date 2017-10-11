import React, { Component } from 'react'
import Button from './component/Button'
import HLine from './component/HLine'
import H1 from './component/H1'
import H1Sub from './component/H1Sub'
import Callout from './component/Callout'
import colors from './colors'
import css from './styles.css'
import mission from './svg/mission.svg'
import s from './svg/hline.svg'

const styles = {
    button: {
        flex: '1',
        marginLeft: '24px',
    }
}

class App extends Component {
    
    render() {
        return <div className='flex-column' style={{padding: '0px 32px', color: colors.dark}}>
            <div className='flex-row' style={{
                padding: '16px 0px 12px 0px'}}>
                <Callout />
                <div className='flex-row' style={{flex: '1', justifyContent: 'space-between'}}>
                    <Button text='MAP' img='' style={styles.button} />
                    <Button text='QUEST' img='' style={styles.button} />
                    <Button text='ITEM' img='' style={styles.button} />
                    <Button text='WEAPON' img='' style={styles.button} />
                </div>
            </div>
            <HLine style={{margin: '0px -32px'}} />
            <div className='flex-row' style={{margin: '10px 0px 36px', alignItems: 'baseline'}}>
                <H1 text='MAP' />
            </div>
            <div className='flex-row'>
                <div className='flex-column' style={{flex: 3, justifyContent: 'space-between', paddingRight: '56px'}}>
                    <div className='flex-row'>
                        <Callout />
                        <div className='flex-column' style={{flex: 1, marginLeft: '24px'}}>
                            <Button type='small' text='快速保存' img='' />
                            <Button type='small' text='地图阅览模式' img='' style={{marginTop: '20px'}} />
                            <Button type='small' text='地图图示一览' img='' style={{marginTop: '20px'}} />
                        </div>
                    </div>
                    <div className='flex-column' style={{letterSpacing: '2px'}}>
                        <span style={{fontSize: '12px'}}>森林地带</span>
                        <div className='flex-row' style={{
                            alignItems: 'center',
                            borderWidth: '1px 0px', 
                            borderStyle: 'solid', 
                            borderColor: colors.grayLight,
                            margin: '2px 0px 2px 0px',
                            padding: '6px 4px 6px 4px'}}>
                            <img width='16px' height='16px' src={mission} alt='' />
                            <span style={{fontSize: '18px', marginLeft: '8px'}}>飞弹的补给作战</span>
                        </div>
                        <span style={{fontSize: '14px', textIndent: '2em'}}>支援沉默都市的飞弹补给作战</span>
                    </div>
                </div>
                <img style={{flex: 7, height: '400px', border: `1px solid ${colors.gray}`}} src='' alt='' />
            </div>
            <HLine style={{margin: '32px -32px'}} />
        </div>
    }

    componentWillMount() {
        document.body.style.backgroundColor = colors.light
    }
}

export default App