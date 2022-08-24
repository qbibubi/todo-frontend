import './Input.css'


const Input = () => {
    return(
        <div className='note-input'>
            <input
                type='text'
                placeholder='Title'
            />
            <textarea
                placeholder='Take a note...'
            />
            <button>Add note</button>
        </div>
    ); 
}

export default Input;