import React, {useState} from 'react'


export default function Explore() {


    const fetchWord = async () => {

        fetch("https://wordsapiv1.p.rapidapi.com/words/incredible/definitions", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c5c6d62868msh858f876df559e6bp1ef5afjsn191f714e10b1",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    };

    fetchWord();
   const handleSubmit = (event)=>{
       event.preventDefault()
   }
   const handleInputChange = (event) =>{

   }


    return (
        <div>
            <h1>Explore</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="wordSearch"
                placeholder="Search for words">
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
