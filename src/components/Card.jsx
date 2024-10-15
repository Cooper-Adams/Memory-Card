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
                <img draggable='false' className='card-rarity' src={props.rarity + (props.rarity == 'lr' ? '.gif' : '.png')} />
                <img draggable='false' className='card-type' src={props.type + '.png'} />
                <img draggable='false' className='card-img' src={props.img} style={{display: (props.img != 'lrgif' ? 'block' : 'none')}}/>
                <video autoPlay disablePictureInPicture disableRemotePlayback loop muted playsInline poster='' src={props.lr} style={{display: (props.img == 'lrgif' ? 'block' : 'none')}}></video>
            </div>

            <div className={props.type + ' card-nt'}>
                <span className='card-name'>{props.name}</span>
                <span className='card-title'>{props.title}</span>
            </div>
        </div>
    )
}

export default Card