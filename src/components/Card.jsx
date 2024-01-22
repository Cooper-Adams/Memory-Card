import React, { useState } from 'react'

const Card = (props) => {
    const [wasClicked, setWasClicked] = useState(false)

    const handleClick = () => {
        if (wasClicked) {
            props.setGameOver()
        } else {
            setWasClicked(true)
            props.updateClickedCards({name: props.name, id: props.id})
            props.updateScore()
        }
    }

    return (
        <div className='card' onClick={handleClick}>
            <img className='card-img' src={props.img} />
            <h4 className='card-name'>{props.name}</h4>
            <h6 className='card-title'>{props.title}</h6>
        </div>
    )
}

export default Card