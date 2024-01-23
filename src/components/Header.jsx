import React from 'react'

const Header = (props) => {
    return (
        <header className='header'>
            <h2 className='h-title'>Memory Cards</h2>
            <div className='h-score-container'>
                <h2 className='h-score'>Score: {props.score}</h2>
                <h2 className='h-highscore'>High Score: {props.highScore}</h2>
            </div>
        </header>
    )
}

export default Header