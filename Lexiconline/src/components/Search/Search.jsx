import { useState } from 'react';
import style from './Search.module.scss';
import { Fetch } from '../Fetch/Fetch';

export const Search = () => {
    const [searchWord, setSearchWord] = useState('');
    const [submittedWord, setSubmittedWord] = useState('');

    const handleInputChange = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSearch = () => {
        setSubmittedWord(searchWord);
    };

    return (
        <>
            <div className={style.searchContainer}>
                <h3>Enter a word to search for</h3>
                <div className={style.searchStyle}>
                    <input
                        type="text"
                        value={searchWord}
                        onChange={handleInputChange}
                        placeholder="Type a word..."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>

            {/* Render Fetch component with the search word */}
            {submittedWord && <Fetch searchWord={submittedWord} />}
        </>
    );
};
