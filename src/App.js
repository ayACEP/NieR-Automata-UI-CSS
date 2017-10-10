import React, { Component } from 'react'
import Button from './component/Button'
import HLine from './component/HLine'
import H1 from './component/H1'
import H1Sub from './component/H1Sub'
import Callout from './component/Callout'
import colors from './colors'
import css from './styles.css'
import svg from './svg/logo.svg'
import s from './svg/hline.svg'

const styles = {
    button: {
        flexGrow: '1',
        marginLeft: '24px',
    }
}

class App extends Component {
    
    render() {
        return <div className='flex-column' style={{padding: '0px 32px'}}>
            <div className='flex-row' style={{
                padding: '16px 0px 12px 0px'}}>
                <Callout />
                <div className='flex-row' style={{flexGrow: '1', justifyContent: 'space-between'}}>
                    <Button text='MAP' img={svg} style={styles.button} />
                    <Button text='QUEST' img={svg} style={styles.button} />
                    <Button text='ITEM' img={svg} style={styles.button} />
                    <Button text='WEAPON' img={s} style={styles.button} />
                </div>
            </div>
            <HLine style={{margin: '0px -32px'}} />
            <div className='flex-row' style={{alignItems: 'baseline'}}>
                <H1 style={{margin: '6px 0px 20px'}} text='ITEM' />
                <H1Sub text='&nbsp;-&nbsp;所有道具' />
            </div>
        </div>
    }

    componentWillMount() {
        document.body.style.backgroundColor = colors.light
    }
}

export default App