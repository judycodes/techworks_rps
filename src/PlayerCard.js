import React from 'react'

//images of rock, paper, scissor
const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => { //props is passing as argument representing rock, paper, or scissors
    console.log(props)//shows the values of props (key/value) passed into PlayerCard components in App.js
    //props is an object with key/value pairs in components and being passed around elsewhere


    
    var sign = props.sign
    var image = ""
    
    if(sign === "rock") {
        image = rock;
    } else if(sign === "paper") {
        image = paper;
    } else {
        image = scissors;
    }

    
    return (
        <div className = "player-card">
           <img alt="sign" src={image} />
        </div>
    )
}

// {sign} between divs shows value text in game
export default PlayerCard;

