import React from 'react'
import pictureList from '../assets/picturelist'

const GameOver = (props) => {
    let modeName = ''

    if (props.mode == 'full') {
        modeName = 'All Sagas'
    } else if (props.mode == 'z') { 
        modeName = 'Dragon Ball Z Sagas'
    } else if (props.mode == 'super') {
        modeName = 'Dragon Ball Super Sagas'
    } else if (props.mode == 'gt') {
        modeName = 'Dragon Ball GT Sagas'
    } else if (props.mode == 'movies') {
        modeName = 'Dragon Ball Movie Sagas'
    }

    return (
        <>
            <div className='game-over'>
                <h1 className='go-title'>Game Over!!!</h1>

                <div className='go-inner-cont'>
                    <img src={pictureList[props.sagaName]} alt={pictureList[props.sagaName]}/>

                    <div className='go-ic-text'>
                        <h2 className='go-message'>Mode: {modeName}</h2>
                        <h2 className='go-message'>Saga: {props.sagaName}</h2>
                        <h2 className='go-message'>Score: {props.score}</h2>

                        <h2 className='go-message' style={{display: props.score === props.modeScore ? 'none' : 'block'}}>You lost!</h2>
                        <h2 className='go-message' style={{display: props.score === props.modeScore ? 'block' : 'none'}}>You won!</h2>

                        <div className='go-buttons'>
                            <h2 className='go-button' style={{display: props.score === props.modeScore ? 'none' : 'block'}} onClick={props.resetRound}>Retry</h2>
                            <h2 className='go-button' onClick={props.resetGame}>New Mode</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameOver