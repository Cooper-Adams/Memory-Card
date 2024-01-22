import React, {useEffect, useState} from 'react'
import Card from './Card'

import characters from './Characters'

const Game = (props) => {
    const [clickedCards, setClickedCards] = useState([])

    /* Updates the record of cards that have been clicked */
    const updateClickedCards = (card) => {
        setClickedCards([
            ...clickedCards,
            card
        ])
    }

    /* Erases the record of cards that have been clicked */
    const eraseClickedCards = () => {setClickedCards([])}

    /* Defines the cards */
    let charMap = characters.map((card) => {
        return (
            <Card
                key={card.id}
                name={card.name}
                title={card.title}
                img={card.img}
                updateClickedCards={updateClickedCards}
                updateScore={props.updateScore}
                setGameOver={props.setGameOver}
            />
        )
    })

    /* Fisher-Yates Sorting Algorithm */
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }

        return array
    } 

    /* Shuffles the card map */
    const shuffleCards = () => { charMap = shuffle(charMap)}
    
    return (
        <div className='game-div'>
            {charMap}
        </div>
    )
}

export default Game