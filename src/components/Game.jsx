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
    const eraseClickedCards = () => { setClickedCards([]) }

    let charMap = characters.map((card) => {
        return (
            <Card
                key={card.id}
                id={card.id}
                name={card.name}
                title={card.title}
                img={card.img}
                clickedCards = {clickedCards}
                eraseClickedCards={eraseClickedCards}
                updateClickedCards={updateClickedCards}
                updateScore={props.updateScore}
                setGameOver={props.setGameOver}
            />
        )
    })

    /* Shuffles the card map */
    for (let i = (characters.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        characters[i] = characters.splice(j, 1, characters[i])[0]
    }

    return (
        <div className='game-div'>
            {charMap}
        </div>
    )
}

export default Game