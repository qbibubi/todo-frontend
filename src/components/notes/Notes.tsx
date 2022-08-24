import { useState } from 'react';
import Input from '../input/Input';
import './Notes.css'

interface Note {
    title: string,
    text: string,
    id: string,
    date: Date;
}

const Notes = (props: Note) => {};

export default () => {
    const [data, setData] = useState([
        { title: 'Loading titles...', text: 'Loading note...', id: '5e39493e', date: '2022-07-07' },
        { title: 'Loading titles...', text: 'Loading note...', id: '58c2001d', date: '2022-07-07' },
        { title: 'Loading titles...', text: 'Loading note...', id: '93a1f1cc', date: '2022-07-07' },
    ]);

    const handleCreate = () => {
        const title = document.querySelector('.title-input');
        const text = document.querySelector('.text-input');


    }

    const handleDelete = (id: string) => {

    }

    return (
        <>
            <Input handleCreate={handleCreate}/>
        </>
    );
}