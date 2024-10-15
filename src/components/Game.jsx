import Card from './Card'
import fullList from '../characters/_fulllist'
import React, {useEffect, useState} from 'react'
import shuffle from 'lodash.shuffle'

let charList = []

const Game = (props) => {
    const [clickedCards, setClickedCards] = useState([])
    const [stage, setStage] = useState(0)

    charList = fullList[props.sagaName]

    /* Updates the record of cards that have been clicked */
    const updateClickedCards = (card) => { setClickedCards([...clickedCards, card]) }

    /* Erases the record of cards that have been clicked */
    const eraseClickedCards = () => { setClickedCards([]) }

    /* Grabs the info for each character in the level */
    let charMap = charList[stage].map((card) => {
        return (
            <Card
                key={card.id}
                id={card.id}
                name={card.name}
                title={card.title}
                img={card.img}
                type={card.type}
                rarity={card.rarity}
                lr={card.lr}
                updateClickedCards={updateClickedCards}
                updateScore={props.updateScore}
                setGameOver={props.setGameOver}
            />
        )
    })

    /* Use effect here to change the level when the score for that level has been maxed */
    useEffect(() => {
        if (clickedCards.length >= 4) {
            eraseClickedCards()
            if (charList.length == (stage + 1)) {
                setStage(0)
                props.setLevel(props.level + 1)
            } else {
                setStage(stage + 1)
            }
        }
    }, [clickedCards])

    /* lodash shuffle the stage */
    charList[stage] = shuffle(charList[stage])

    return (
        <div className='game-div'>
            {charMap}
        </div>
    )
}

export default Game