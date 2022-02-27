import React, { useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) =>
{
    const [text, setText] = useState('');

      const onClick = e =>
    {
        e.preventDefault();
        if (text === '')
        {
           setAlert('Please enter something', 'light');
        }
        else
        {
            searchUsers(this.state.text);
            setText('');
        }
        

    };  
    const onChange = (e) =>
    {
        setText(e.target.value);
        let input = document.querySelector('input');
        
        
    }
        return (

            <div>
                <form onClick ={ onClick} className='form'>
                    
                     <input type="text" name="form" placeholder="Enter here..." value={text}  onChange={onChange}/>
                <input type = "button" value = "search" className='btn btn-dark btn-block'/> 
                
                </form>
                
                {showClear && (

                    <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
                )
                    
                }
               
                
            </div>
        )
    
}
Search.propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

export default Search;


