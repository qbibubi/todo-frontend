import React, { useState } from 'react'
import Notes from './components/notes/Notes'

const App = () => {
    const [data, setData] = useState([{
        id: "1", title: "title", body: "body", date: new Date()
    }])

    return (
        <div className='main-content'>
            <Notes data={data}/>
        </div>
    )
}

export default App;