import { useState } from 'react';
import Input from '../input/Input';
import './Notes.css'

interface Notes {
    title: string,
    text: string,
    id: string,
    date: Date;
}

const Notes = (props: Notes) => (<div></div>); 

export default () => {
    const [data, setData] = useState([
        { title: 'Loading titles...', text: 'Loading note...', id: '5e39493e', date: '2022-07-07' },
        { title: 'Loading titles...', text: 'Loading note...', id: '58c2001d', date: '2022-07-07' },
        { title: 'Loading titles...', text: 'Loading note...', id: '93a1f1cc', date: '2022-07-07' },
    ]);

    const handleCreate = () => {
        const title = document.querySelector('.title-input') as HTMLInputElement;
        const text = document.querySelector('.text-input') as HTMLInputElement;

        if (title.value.trim() && text.value.trim()) {
            // set the thing here and push a new note



        }
    }

    const handleDelete = (id: string) => {

    }

    return (
        <>
            <Input handleCreate={handleCreate}/>
            <div className=''>
                <div className='note'>
                    <Notes />
                </div>
            </div>
        </>
    );
}