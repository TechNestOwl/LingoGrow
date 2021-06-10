import React, {useState} from 'react'
// import SET_WORD_INFO from '../action-types/userActionType';
import { displayInfo } from '../actions/userAction';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

export default function Explore(props) {

    const dispatch = useDispatch();
    const [wordSearch, setWordSearch] = useState();

    const fetchWord = async () => {
        const data = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordSearch}/definitions`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c5c6d62868msh858f876df559e6bp1ef5afjsn191f714e10b1",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
                })
                const jsonData = await data.json()
                console.log(jsonData)
    };
    fetchWord();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h1>Explore</h1>
            <form onSubmit={e => {handleSubmit(e)}}>
                <input
                type="text"
                name="wordSearchInput"
                placeholder="Search for words"
                value = {wordSearch}
                onChange={e => setWordSearch(e.target.value)}
                >
                </input>
                <Button type="submit" className="submitButton" onClick={() => dispatch(displayInfo)}>Submit</Button>
            </form>
        </div>
    )
}
