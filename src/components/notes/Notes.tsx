import React, { useState } from 'react';
import Input from '../input/Input';
import './Notes.css'

interface INote {
    _id: string
    title: string 
    body: string 
    date: Date
    color?: string 
}

const Notes = (props: INote) => {
    const [data, setData] = useState(
        { _id: '0x0', title: 'Loading titles...', body: 'Loading bodies...', date: new Date(), color: '#0x0' }
    );

    const handleCreate = () => {
        const title = document.querySelector('.title-input') as HTMLInputElement;
        const body = document.querySelector('.text-input') as HTMLInputElement;
        const date = new Date();

        if (title.value.trim() || body.value.trim()) {}

    }

    return (
        <>
            <Input />
            <div className='note' key={data._id}>
                
            </div>
        </>
    )
}

export default Notes;