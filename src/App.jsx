import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Game from './components/Game'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'

const App = (props) => {
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    /* Increments the current score */
    const updateScore = () => { setScore(score + 1) }

    /* Increments the high score once the first point is scored or if the current score surpasses the highest score */
    const updateHighScore = () => {
        if (highScore === 0 || score > highScore) {
            setHighScore(score)
        }
    }

    /* Ends the game state */
    const gameFinished = () => { setGameOver(true) }

    /* Resets the game, but not the high score */
    const resetGame = () => {
        setGameOver(false)
        setScore(0)
    }

    /* Resets the game completely */
    const resetGameWin = () => {
        setScore(0)
        setHighScore(0)
        setGameOver(false)
    }

    /* Effect is used to update the high score, which is dependent on the current score changing */
    useEffect(() => {
        updateHighScore()
    }, [score])

    return (
        <div className='react-app'>
            <Header 
                score={score}
                highScore={highScore}
            />
            
            <Game
                updateScore={updateScore}
                setGameOver={gameFinished}
            />

            {gameOver && <GameOver resetGame={resetGame} highScore={highScore} />}

            {highScore === 20 && <GameWin resetGame={resetGameWin}/>}
        </div>
    )
}

export default App