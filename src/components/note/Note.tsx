import INote from "../../interfaces/INote"
import './Note.css'

const Note: React.FC<INote> = ({ id, title, body, delete: handleDelete}: INote) => {
    return (
        <div className="note" key={id} >
            <p className="note-title">
                {title} 
            </p>
            <p className="note-body">
                {body}
            </p>
            <button
                className="note-delete"
                onClick={()=>handleDelete(id)}
            >
                x
            </button>
        </div>
    );
}

export default Note;