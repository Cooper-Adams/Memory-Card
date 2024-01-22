import React from 'react'

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className='h-title'>Memory Cards</h1>
            <div className='h-score-container'>
                <span className='h-score'>Score: {props.score}</span>
                <span className='h-highscore'>High Score: {props.highScore}</span>
            </div>
        </header>
    )
}

export default Header