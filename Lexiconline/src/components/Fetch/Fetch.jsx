import { useEffect, useState } from 'react';
import style from './Fetch.module.scss';

export const Fetch = ({ searchWord }) => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

    async function fetchData() {
        setLoading(true);
        setError(null);  // Reset error state
        try {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await res.json();
            setApiData(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setApiData(null);  // Set to null in case of an error
            setError(<main className={style.DictionaryContainer}>
                <div className={style.apiNotFound}><p>Word not found</p></div>
            </main>);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (searchWord) {
            fetchData();
        }
    }, [searchWord]);

    if (!searchWord) {
        return (<main className={style.DictionaryContainer}>
            <div className={style.WelcomeText}><h2>Lexiconline Dictionary</h2>
                <p>English is (not) fun!</p></div>
        </main>);}

if (loading) {
    return (
        <main className={style.DictionaryContainer}>
            <div className={style.WordLoading}><p>Loading....</p></div>
        </main>
    );
}

if (error) {
    return <p>{error}</p>;
}

if (!apiData) {
    return (
        <main className={style.DictionaryContainer}>
            <div className={style.apiNotFound}><p>API Data not found</p></div>
        </main>

    );
}

const wordData = apiData[0];

return (
    <main className={style.DictionaryContainer}>
        <section className={style.UpperStyle}>
            <div>
                <h4>{wordData.meanings?.[0]?.partOfSpeech || ''}</h4>
                <p>{wordData.meanings?.[0]?.definitions?.[0]?.definition || ''}</p>
            </div>
            <div>
                <h5>Synonyms:</h5>
                <p>{wordData.meanings?.[0]?.synonyms?.[0] || ''}</p>
            </div>
        </section>

        <section className={style.MiddleStyle}>
            <div>
                <h4>{wordData.meanings?.[1]?.partOfSpeech || ''}</h4>
                <p>{wordData.meanings?.[1]?.definitions?.[0]?.definition || ''}</p>
            </div>
        </section>

        <section className={style.LowerStyle}>
            <div>
                <h4>{wordData.meanings?.[2]?.partOfSpeech || ''}</h4>
                <p> {wordData.meanings?.[2]?.definitions?.[0]?.definition || ''}</p>
                <p> {wordData.meanings?.[2]?.definitions?.[1]?.definition || ''}</p>
                <p> {wordData.meanings?.[2]?.definitions?.[2]?.definition || ''}</p>
            </div>
            <div>
                <h5>Example:</h5>
                <p> {wordData.meanings?.[2]?.definitions?.[0]?.example || ''}</p>
                <p> {wordData.meanings?.[2]?.definitions?.[1]?.example || ''}</p>
                <p> {wordData.meanings?.[2]?.definitions?.[2]?.example || ''}</p>
            </div>
        </section>
    </main>
);
};
