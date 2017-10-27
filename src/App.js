import React, { Component } from 'react'
import Button from './component/Button'
import HLine from './component/HLine'
import H1 from './component/H1'
import H1Sub from './component/H1Sub'
import Callout from './component/Callout'
import Mission from "./component/Mission";
import colors from './colors'
import css from './styles.css'
import s from './svg/hline.svg'
import style from './component/Button'

const styles = {
    button: {
        flex: '0 1 23%',
        // marginLeft: '24px',
    }
}

class App extends Component {
    
    render() {
        return <div className='flex-column' style={{padding: '0px 42px', color: colors.dark}}>
            <div className='flex-row' style={{
                margin: '26px 0px 22px'}}>
                <Callout style={{marginRight: '24px'}} />
                <div className='flex-row' style={{flex: '1', justifyContent: 'space-between'}}>
                    <Button text='MAP' img='' style={styles.button} />
                    <Button text='QUEST' img='' style={styles.button} />
                    <Button text='ITEM' img='' style={styles.button} />
                    <Button text='WEAPON' img='' style={styles.button} />
                </div>
            </div>
            <HLine style={{margin: '0px -42px'}} />
            <div className='flex-row' style={{margin: '10px 0px 36px', alignItems: 'baseline'}}>
                <H1 text='MAP' />
            </div>
            <div className='flex-row'>
                <div className='flex-column' style={{flex: 3, justifyContent: 'space-between', marginRight: '66px'}}>
                    <div className='flex-row' style={{height: '200px'}}>
                        <Callout style={{marginRight: '24px'}} />
                        <div className='flex-column' style={{flex: 1, justifyContent: 'space-between'}}>
                            <Button type='small' text='快速保存' img='' />
                            <Button type='small' text='地图阅览模式' img='' />
                            <Button type='small' text='地图图示一览' img='' />
                        </div>
                    </div>
                    <Mission area='森林地带' name='飞弹的补给作战' summary='支援沉默都市的飞弹补给作战' />
                </div>
                <img style={{flex: 7, height: '600px', border: `1px solid ${colors.gray}`}} src='' alt='' />
            </div>
            <HLine style={{margin: '32px -42px'}} />
        </div>
    }

    componentWillMount() {
        document.body.style.backgroundColor = colors.light
    }
}

export default App