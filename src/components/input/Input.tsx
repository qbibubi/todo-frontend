import './Input.css'

interface IProps {
    onClick?: React.MouseEventHandler
}

const Input: React.FC<IProps> = ({onClick}: IProps) => (
    <div className='note-input'>
        <input
            className='title-input'
            type='text'
            placeholder='Title'
        />
        <textarea
            className='body-input'
            placeholder='Take a note...'
        />
        <button onClick={onClick}>Add note</button>
    </div>
); 

export default Input;