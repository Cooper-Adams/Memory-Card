import React from 'react'

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className='h-title'>DOKKAN Memory Cards</h1>
            <h1 className='h-saga-title'>{props.sagaName}</h1>
            <div className='h-score-container'>
                <h1 className='h-score'>SCORE: {props.score}</h1>
                <h1 className='h-highscore'>HIGH SCORE: {props.highScore}</h1>
            </div>
        </header>
    )
}

export default Header