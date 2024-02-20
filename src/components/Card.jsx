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
        <div className='card-container'>
            <div className={props.type + ' card'} onClick={handleClick}>
                <img draggable="false" className='card-rarity' src={'/src/assets/' + props.rarity + '.png'} />
                <img draggable="false" className='card-type' src={'/src/assets/' + props.type + '.png'} />
                <img draggable="false" className='card-img' src={props.img} />
            </div>

            <div className={props.type + ' card-nt'}>
                <span className='card-name'>{props.name}</span>
                <span className='card-title'>{props.title}</span>
            </div>
        </div>
    )
}

export default Card