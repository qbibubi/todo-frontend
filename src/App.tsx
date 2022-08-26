import React, { useState } from 'react'
import Notes from './components/notes/Notes'
import './App.css'

const App = () => {
    const [data, setData] = useState([
        { id: "1", title: "title", body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore commodi numquam dignissimos, ad ducimus consequuntur iusto laborum, veniam error, officia ut ea tenetur repellendus a eaque deserunt omnis obcaecati?', date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() },
        { id: "1", title: "title", body: "i love typescript", date: new Date() }
    ])

    return (
        <div className='main-content'>
            <Notes data={data}/>
        </div>
    )
}

export default App;