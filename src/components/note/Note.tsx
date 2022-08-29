import INote from "../../interfaces/INote"
import './Note.css'

const Note: React.FC<INote> = ({ id, title, body, date}: INote) => {
    return (
        <div className="note" key={id} >
            <p className="note-title">
                {title} 
            </p>
            <p className="note-body">
                {body}
            </p>
        </div>
    );
}

export default Note;