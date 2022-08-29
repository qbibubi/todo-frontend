import { v4 as uuidv4 } from "uuid";
import React, { useState } from 'react';

import INote from '../../interfaces/INote';
import Input from '../input/Input';
import Note from '../note/Note';
import './Notes.css'

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>([]);
    
    const handleClick = () => {
        const titleElement = document.querySelector('.title-input') as HTMLInputElement;
        const bodyElement = document.querySelector('.body-input') as HTMLInputElement;

        const titleText = titleElement.value.trim();
        const bodyText = bodyElement.value.trim();

        if (titleText || bodyText) {
            setNotes((prev: any[]) => {
                const newNote = {
                    id: uuidv4(),
                    title: titleText, 
                    body: bodyText,
                    date: Date.now() // unix timestamp
                }
                return [...prev, newNote];
            });

            // reset values
            titleElement.value = "";
            bodyElement.value = "";
        }
    }

    const handleDelete = (id: string) => {
        const filteredNote = notes.filter((n) => n.id !== id);
        setNotes(() => filteredNote);
    }

    return (
        <>
            <Input onClick={handleClick}/>
            <div className='notes-wrapper'>
                {notes.map((note: INote, idx: number) => {
                    return (
                    <>
                        <Note
                            key={idx}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            date={note.date}        
                        /> 
                        <button
                            className='delete-note'
                            onClick={()=>handleDelete(note.id)}
                        >
                            x
                        </button>
                    </>
                    )
                })}
            </div>
        </>
    )
}

export default Notes;