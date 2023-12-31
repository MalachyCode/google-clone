import React, { useState } from 'react';
import './Find.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Find({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log('you hit the search button >> ', input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // do something
    history('/search');

    //
  };
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={search}>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            type='submit'
            onClick={search}
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Find;
