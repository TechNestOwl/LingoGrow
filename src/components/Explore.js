import React, {useState} from 'react'
// import SET_WORD_INFO from '../action-types/userActionType';
import { displayInfo } from '../actions/userAction';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

export default function Explore(props) {

    const dispatch = useDispatch();
    const [wordSearch, setWordSearch] = useState("");

    const searchWord = useSelector(state => state.wordReducer.definitions)

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
                displayInfo(dispatch,jsonData);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWord();
        console.log(searchWord);
    }
    
    return (
        <div className="pageContaier">
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
                <Button type="submit" className="submitButton">Submit</Button>
            </form>
            
            <div className="Cards">
                {searchWord&&searchWord.map((word) => {
                return(
                    <div className="cardContainer">
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title><h3>{word.definition}</h3></Card.Title>
                                    <Card.Text>
                                                        <p>{word.partOfSpeech}</p>
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        
                    </div>
                )
                })}
            </div>
        </div>
    )
}
