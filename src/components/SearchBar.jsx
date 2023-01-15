import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';

const SearchBar = () => {

    const [value, setValue] = useState('')
    const navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault();
        if(value) {
            navigate(`/search/${value}`)
            setValue('')
        }
    }
    
    return (
        <form onSubmit={submitHandler} className='flex relative -mr-4'>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='Search...' className='text-[14px] outline-none rounded-lg px-4 w-[280px] ss:w-[217px]' />
            <IconButton aria-label="Example" type='submit' sx={{ position: 'relative', right: '45px', padding: '5px', fontSize: '1rem'}}>
                <SearchOutlinedIcon color='primary' />
            </IconButton>
        </form>
    )
}

export default SearchBar;