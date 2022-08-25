import INote from '../../interfaces/INote';
import Input from '../input/Input';
import Note from '../note/Note';
import './Notes.css'

interface INoteProps {
    data: INote[];
}

const Notes: React.FC<INoteProps> = ({data}: INoteProps) => {
    return (
        <>
            <Input />
            <div className='note-wrapper'>
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