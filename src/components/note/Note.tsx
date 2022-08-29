import INote from "../../interfaces/INote"
import './Note.css'

const Note: React.FC<INote> = ({ id, title, body, delete: handleDelete}: INote) => {
    return (
        <div className="note" key={id} >
            <p className="note-title">
                {title} 
            </p>
            <button
                className="note-delete"
                onClick={()=>handleDelete(id)}
            >
                x
            </button>
            <p className="note-body">
                {body}
            </p>
        </div>
    );
}

export default Note;