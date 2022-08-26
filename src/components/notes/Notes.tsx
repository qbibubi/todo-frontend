import React, { useState } from 'react';
import INote from '../../interfaces/INote';
import Input from '../input/Input';
import Note from '../note/Note';
import './Notes.css'

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>([]);;
    
    const handleClick = () => {
        const titleElement = document.querySelector('.title-input') as HTMLInputElement;
        const bodyElement = document.querySelector('.body-input') as HTMLInputElement;

        const titleText = titleElement.value.trim();
        const bodyText = bodyElement.value.trim();

        if (titleText || bodyText) {
            setNotes((prev: any[]) => {
                const newNote = {
                    id: "soonTM", // TODO
                    title: titleText, 
                    body: bodyText,
                    date: new Date()
                }
                return [...prev, newNote];
            })

            // reset values
            titleElement.value = ""
            bodyElement.value = ""
        }
    }

    return (
        <>
            <Input onClick={handleClick}/>
            <div className='notes-wrapper'>
                {notes.map((note: INote, idx: number) => {
                    return <Note
                        key={idx}
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