import './Note.css'

interface Note {
    title: string,
    text: string,
}

const Note = (props: Note) => (
    <div className="note">
        {props.title}
        <br/>
        {props.text}
    </div>
);

export default Note; 