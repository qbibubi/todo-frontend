import INote from "../../interfaces/INote"
import './Note.css'

const Note: React.FC<INote> = ({ id, title, body, date, color}: INote) => {
    return (
        <div className="note" key={id}>
            <div className="note-title">

            </div>
            <div className="note-body">

            </div>
        </div>
    )
}

export default Note;