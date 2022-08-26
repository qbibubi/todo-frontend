import React, { useState } from 'react';
import INote from '../../interfaces/INote';
import Input from '../input/Input';
import Note from '../note/Note';
import './Notes.css'

interface INoteProps {
    data: INote[];
}

const Notes: React.FC<INoteProps> = ({data}: INoteProps) => {
    const [noteData, setNoteData] = useState()
    
    const handleClick = () => {
        const title = document.querySelector('.title-input') as HTMLInputElement;
        const body = document.querySelector('.body-input') as HTMLInputElement;

        if (title.value.trim() || body.value.trim()) {
            // create unique id for note
            // take the {data}: INoteProps and apply the values to it
        }
    }

    return (
        <>
            <Input onClick={handleClick}/>
            <div className='notes-wrapper'>
                {data.map(note => {
                    return <Note 
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        date={note.date}
                        />
                })}
            </div>
        </>
    )
}

export default Notes;