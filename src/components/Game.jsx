import React, {useEffect, useState} from 'react'
import Card from './Card'

import characters from './Characters'

const Game = (props) => {
    const [clickedCards, setClickedCards] = useState([])
    const [level, setLevel] = useState(0)

    /* Updates the record of cards that have been clicked */
    const updateClickedCards = (card) => { setClickedCards([...clickedCards, card]) }

    /* Erases the record of cards that have been clicked */
    const eraseClickedCards = () => { setClickedCards([]) }

    /* Advances the level of the game */
    const increaseLevel = () => { setLevel(level + 1) }

    /* Grabs the next array of characters */
    let splitCharacters = characters.map((arr) => arr.slice())

    /* Shuffles the card map with the Fisher-Yates algo */
    for (let i = (splitCharacters[level].length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        splitCharacters[level][i] = splitCharacters[level].splice(j, 1, splitCharacters[level][i])[0]
    }

    /* Grabs the info for each character in the level */
    let charMap = splitCharacters[level].map((card) => {
        return (
            <Card
                key={card.id}
                id={card.id}
                name={card.name}
                title={card.title}
                img={card.img}
                type={card.type}
                rarity={card.rarity}
                clickedCards = {clickedCards}
                eraseClickedCards={eraseClickedCards}
                updateClickedCards={updateClickedCards}
                updateScore={props.updateScore}
                setGameOver={props.setGameOver}
            />
        )
    })

    /* Use effect here to change the level when the score for that level has been maxed */
    useEffect(() => {
        if (clickedCards.length == splitCharacters[level].length && level < 9) {
            eraseClickedCards()
            increaseLevel()
        }
    }, [clickedCards, level])

    return (
        <div className='game-div'>
            {charMap}
        </div>
    )
}

export default Game