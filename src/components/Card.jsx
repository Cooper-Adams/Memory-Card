import React, { useState}  from 'react'

const Card = (props) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if (clicked) {
            props.setGameOver()
        } else {
            setClicked(true)
            const card = {id: props.id}
            props.updateClickedCards(card)
            props.updateScore()
        }
    }

    return (
        <div className='card-container'>
            <div className={props.type + ' card'} onClick={handleClick}>
                <img draggable='false' className='card-rarity' src={props.rarity + '.png'} />
                <img draggable='false' className='card-type' src={props.type + '.png'} />
                <img draggable='false' className='card-img' src={props.img} />
            </div>

            <div className={props.type + ' card-nt'}>
                <span className='card-name'>{props.name}</span>
                <span className='card-title'>{props.title}</span>
            </div>
        </div>
    )
}

export default Card