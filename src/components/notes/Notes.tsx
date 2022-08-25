import INote from '../../interfaces/INote';
import './Notes.css'

interface INoteProps {
    data: INote[];
}


const Notes: React.FC<INoteProps> = ({data}: INoteProps) => {
    return (
        <>
            <div className='note-wrapper'>
                <div className='note' >

                </div>
            </div>
        </>
    )
}

export default Notes;