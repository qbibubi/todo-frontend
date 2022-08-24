import React from 'react'
import Note from './components/note/Note'
import Input from './components/input/Input'

const App = () => {
    return (
        <div className='main-content'>
            <Input />
            <div className='notes-container'>
                <Note title='hello' text='XDDDDD' />    
            </div>
        </div>
    )
}

export default App;