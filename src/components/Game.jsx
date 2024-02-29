import Card from './Card'
import fullList from '../characters/_fulllist'
import React, {useEffect, useState} from 'react'
import movieList from '../characters/_movielist'
import sagaList from '../characters/_sagalist'
import superList from '../characters/_dragonballsuper'
import zList from '../characters/_dragonballz'

let charList = []

const Game = (props) => {
    const [clickedCards, setClickedCards] = useState([])
    const [level, setLevel] = useState(0)
    const [stage, setStage] = useState(0)

    /* Grabs the next array of characters */
    if (props.mode == 'full') {
        useEffect(() => {
            props.setSagaName(sagaList[level])
        })
        charList = fullList[sagaList[level]]
    } else if (props.mode == 'z') { 
        useEffect(() => {
            props.setSagaName(zList[level])
        })
        charList = fullList[zList[level]]
    } else if (props.mode == 'super') {
        useEffect(() => {
            props.setSagaName(superList[level])
        })
        charList = fullList[superList[level]] 
    } else if (props.mode == 'movies') {
        useEffect(() => {
            props.setSagaName(movieList[level])
        })
        charList = fullList[movieList[level]]
    }

    /* Updates the record of cards that have been clicked */
    const updateClickedCards = (card) => { setClickedCards([...clickedCards, card]) }

    /* Erases the record of cards that have been clicked */
    const eraseClickedCards = () => { setClickedCards([]) }

    /* Shuffles the card map with the Fisher-Yates algo */
    // for (let i = (charList[stage].length - 1); i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1))
    //     charList[stage][i] = charList[stage].splice(j, 1, charList[stage][i])[0]
    // }

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
        if (clickedCards.length == 4) {
            eraseClickedCards()
            if (charList.length == (stage + 1)) {
                setStage(0)
                setLevel(level + 1)
            } else {
                setStage(stage + 1)
            }
        }
    }, [clickedCards])

    return (
        <div className='game-div'>
            {charMap}
        </div>
    )
}

export default Game