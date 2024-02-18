import './styles/App.css'
import ChooseMode from './components/ChooseMode'
import Game from './components/Game'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'
import Header from './components/Header'
import React, { useEffect, useState } from 'react'

const App = (props) => {
    const [gameOver, setGameOver] = useState(false)
    const [highScore, setHighScore] = useState(0)
    const [mode, setMode] = useState('')
    const [sagaName, setSagaName] = useState('')
    const [score, setScore] = useState(0)

    /* Changes the game mode */
    const changeMode = (newMode) => { setMode(newMode) }

    /* Ends the game state */
    const gameFinished = () => { 
        setGameOver(true)
        setScore(0)
    }

    /* Resets the game, but not the high score */
    const resetGame = () => {
        setScore(0)
        setGameOver(false)
    }

    /* Resets the game completely */
    const resetGameWin = () => {
        changeMode('')
        setGameOver(false)
        setHighScore(0)
        setScore(0)
    }

    /* Updates the high score */
    const updateHighScore = () => { if (highScore < score) { setHighScore(score) } }

    /* Updates the current score */
    const updateScore = () => { setScore(score + 1) }

    /* Effect is used to update the high score, which is dependent on the current score changing */
    useEffect(() => {
        updateHighScore()
    }, [score])

    if (mode == '') { 
        return ( <ChooseMode changeMode={changeMode}/> ) 
    } else {
        return (
            <div className='react-app'>
                <Header
                    highScore={highScore}
                    sagaName={sagaName}
                    score={score}
                />
                
                {!gameOver && highScore < 131 && (
                    <Game
                        mode={mode}
                        setGameOver={gameFinished}
                        setSagaName={setSagaName}
                        updateScore={updateScore}
                    />
                )}
    
                {highScore === 131 && <GameWin resetGame={resetGameWin}/>}
    
                {gameOver && <GameOver resetGame={resetGame} highScore={highScore} />}
            </div>
        )
    }
}

export default App