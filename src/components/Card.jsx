import React from 'react'

const Card = (props) => {
    const handleClick = () => {
        for (let i = 0; i < props.clickedCards.length; ++i) {
            if (props.clickedCards[i].id === props.id) {
                props.eraseClickedCards()
                props.setGameOver()
                return
            }
        }
        
        props.updateClickedCards({id: props.id})
        props.updateScore()
    }

    return (
        <div className='card' onClick={handleClick}>
            <img className='card-rarity' src={'/src/assets/' + props.rarity + '.png'} />
            <img className='card-type' src={'/src/assets/' + props.type + '.png'} />
            <img className='card-img' src={props.img} />
            <h4 className='card-name'>{props.name}</h4>
            <h6 className='card-title'>{props.title}</h6>
        </div>
    )
}

export default Card