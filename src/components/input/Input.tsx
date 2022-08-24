import { createContext } from 'react';
import './Input.css'

const Input = (handleCreate: any) => {
    
    
    return(
        <div className='note-input'>
            <input
                className='title-input'
                type='text'
                placeholder='Title'
            />
            <textarea
                className='text-input'
                placeholder='Take a note...'
            />
            <button onClick={handleCreate}>Add note</button>
        </div>
    ); 
}

export default Input;