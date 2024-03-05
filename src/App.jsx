import './styles/App.css'
import ChooseMode from './components/ChooseMode'
import Game from './components/Game'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'
import Header from './components/Header'
import movieList from './characters/_movielist'
import musicList from './assets/sounds/_musicList'
import React, { useEffect, useState } from 'react'
import sagaList from './characters/_sagalist'
import superList from './characters/_dragonballsuper'
import zList from './characters/_dragonballz'

const player = new Audio()
player.volume = .01

player.addEventListener('canplay', () => {
    player.play().catch(e => {
        window.addEventListener('click', () => {
            player.play()
        }, { once: true })
    })
})

const App = (props) => {
    const [gameOver, setGameOver] = useState(false)
    const [highScore, setHighScore] = useState(0)
    const [level, setLevel] = useState(0)
    const [mode, setMode] = useState('')
    const [sagaName, setSagaName] = useState('Home')
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

    /* Effect is used to update the saga name, which is dependent on the user selected game mode */
    useEffect(() => {
        if (mode == 'full') {
            setSagaName(sagaList[level])
        } else if (mode == 'z') { 
            setSagaName(zList[level])
        } else if (mode == 'super') {
            setSagaName(superList[level])
        } else if (mode == 'movies') {
            setSagaName(movieList[level])
        }
    }, [level])

    /* Effect is used to update the music, which is dependent on the saga name changing */
    useEffect(() => {
        player.src = musicList[sagaName]
    }, [sagaName])
    
    /* Effect is used to update the high score, which is dependent on the current score changing */
    useEffect(() => {
        updateHighScore()
    }, [score])

    if (sagaName == 'Home') {
        if (mode == 'full') {
            setSagaName(sagaList[level])
        } else if (mode == 'z') { 
            setSagaName(zList[level])
        } else if (mode == 'super') {
            setSagaName(superList[level])
        } else if (mode == 'movies') {
            setSagaName(movieList[level])
        }

        return ( <ChooseMode changeMode={changeMode}/> ) 
    } else {
        return (
            <div className='react-app'>
                <Header
                    highScore={highScore}
                    sagaName={sagaName}
                    score={score}
                />
                
                {!gameOver && (
                    <Game
                        level={level}
                        setGameOver={gameFinished}
                        setLevel={setLevel}
                        sagaName={sagaName}
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