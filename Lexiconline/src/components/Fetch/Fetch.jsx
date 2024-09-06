import { useEffect, useState } from 'react';
import style from './Fetch.module.scss';

export const Fetch = ({ searchWord }) => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('Network response was not ok');
            const data = await res.json();
            setApiData(data);
        } catch {
            setError('Not found');
            setApiData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchWord) fetchData();
    }, [searchWord]);

    if (!searchWord) return null;

    if (loading) {
        return (
            <main className={style.DictionaryContainer}>
                <div className={style.WordLoading}><p>Loading....</p></div>
            </main>
        );
    }

    if (error) {
        return (
            <main className={style.DictionaryContainer}>
                <div className={style.apiNotFound}><p>{error}</p></div>
            </main>
        );
    }

    if (!apiData) return null;

    const wordData = apiData[0];

    return (
        <main className={style.DictionaryContainer}>
            <h3 className={style.searchedWord}>{searchWord}</h3>
            {wordData.meanings && wordData.meanings.map((meaning, index) => (
                <section key={index} className={style.dictionaryStyle}>
                    <div>
                        <h4>{meaning.partOfSpeech || ''}</h4>
                        <p>{meaning.definitions?.[0]?.definition || ''}</p>
                        {meaning.definitions?.slice(1).map((def, idx) => (
                            <p key={idx}>{def.definition || ''}</p>
                        ))}
                    </div>
                    {meaning.partOfSpeech === 'noun' && meaning.synonyms && meaning.synonyms.length > 0 && (
                        <div>
                            <h5>Synonyms:</h5>
                            <p>{meaning.synonyms.join(', ')}</p>
                        </div>
                    )}
                    {meaning.definitions.some(def => def.example) && (
                        <div>
                            <h5>Examples:</h5>
                            {meaning.definitions.map((def, idx) => (
                                def.example && <p key={idx}>{def.example}</p>
                            ))}
                        </div>
                    )}
                </section>
            ))}
        </main>
    );
};
