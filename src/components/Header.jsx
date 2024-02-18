import React from 'react'

const Header = (props) => {
    return (
        <header className='header'>
            <h2 className='h-title'>DOKKAN Memory Cards</h2>
            <h2 className='h-saga-title'>{props.sagaName}</h2>
            <div className='h-score-container'>
                <h2 className='h-score'>SCORE: {props.score}</h2>
                <h2 className='h-highscore'>HIGH SCORE: {props.highScore}</h2>
            </div>
        </header>
    )
}

export default Header