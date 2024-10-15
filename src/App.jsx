import './styles/App.css'
import ChooseMode from './components/ChooseMode'
import Game from './components/Game'
import GameOver from './components/GameOver'
import gtList from './characters/_dragonballgt'
import Header from './components/Header'
import movieList from './characters/_movielist'
import musicList from './assets/sounds/_musicList'
import React, { useEffect, useState } from 'react'
import sagaList from './characters/_sagalist'
import scoreList from './characters/_sagascores'
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
    const [allHS, setAllHS] = useState(0)
    const [dbzHS, setDBZHS] = useState(0)
    const [dbsHS, setDBSHS] = useState(0)
    const [dbmHS, setDBMHS] = useState(0)
    const [dbgtHS, setDBGTHS] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [level, setLevel] = useState(0)
    const [mode, setMode] = useState('')
    const [modeScore, setModeScore] = useState(0)
    const [played, setPlayed] = useState(false)
    const [sagaName, setSagaName] = useState('Home')
    const [score, setScore] = useState(0)

    /* Changes the game mode */
    const changeMode = (newMode) => { setMode(newMode) }

    /* Ends the game state */
    const gameFinished = () => { setGameOver(true) }

    /* Resets the game, but not the high score */
    const resetGame = () => {
        setLevel(0)
        setMode('')
        setSagaName('Home')
        setScore(0)
        setGameOver(false)
    }

    /* Resets the current round */
    const resetRound = () => {
        setLevel(0)
        setScore(0)
        setGameOver(false)
    }

    /* Updates the current score */
    const updateScore = () => { setScore(score + 1) }

    /* Effect is used to update the saga name, which is dependent on the user selected game mode */
    useEffect(() => {
        setModeScore(scoreList[mode])
        if (mode == 'full') {
            if (level < sagaList.length) { setSagaName(sagaList[level]) } 
        } else if (mode == 'z') { 
            if (level < zList.length) { setSagaName(zList[level]) } 
        } else if (mode == 'super') {
            if (level < superList.length) { setSagaName(superList[level]) } 
        } else if (mode == 'gt') {
            if (level < gtList.length) { setSagaName(gtList[level]) } 
        } else if (mode == 'movies') {
            if (level < movieList.length) { setSagaName(movieList[level]) } 
        }
    }, [level, mode])

    /* Effect is used to update the music, which is dependent on the saga name changing */
    useEffect(() => {
        player.src = musicList[sagaName]
    }, [sagaName])
    
    /* Effect is used to update the high score, which is dependent on the current score changing */
    useEffect(() => {
        if (mode == 'full') {
            if (allHS < score) { setAllHS(score) }
        } else if (mode == 'z') { 
            if (dbzHS < score) { setDBZHS(score) }
        } else if (mode == 'super') {
            if (dbsHS < score) { setDBSHS(score) }
        } else if (mode == 'gt') {
            if (dbgtHS < score) { setDBGTHS(score) }
        } else if (mode == 'movies') {
            if (dbmHS < score) { setDBMHS(score) }
        }

        if (score == scoreList[mode]) { setGameOver(true) }
    }, [score])

    /* changes the volume and the state */
    const volumeSwitch = () => {
        if (player.volume > 0) {
            setIsPlaying(false)
            player.volume = 0
        } else {
            setIsPlaying(true)
            player.volume = .01
        }
    }

    return (
        <div className='react-app'>
            {
                sagaName === 'Home' && 
                <ChooseMode
                    played={played} 
                    setMode={changeMode}
                    setPlayed={setPlayed}
                />
            }

            {
                sagaName != 'Home' && 
                !gameOver &&
                <Header 
                    sagaName={sagaName}
                    score={score}
                    highScore= {mode == 'full' ? allHS : mode == 'z' ? dbzHS : mode == 'super' ? dbsHS : mode == 'gt' ? dbgtHS : mode == 'movies' ? dbmHS : 0}
                />
            }

            {
                sagaName != 'Home' && 
                !gameOver &&
                <Game
                    level={level}
                    setGameOver={gameFinished}
                    setLevel={setLevel}
                    sagaName={sagaName}
                    updateScore={updateScore}
                />
            }

            {
                gameOver && 
                <GameOver
                    mode={mode}
                    modeScore={modeScore}
                    resetGame={resetGame}
                    resetRound={resetRound}
                    sagaName={sagaName}
                    score={score} 
                />
            }

            <div className='volume-div'>
                <h2 className='volume-title'>Now Playing: {}</h2>
                <svg className='volume-switch' onClick={volumeSwitch} style={{display: isPlaying == true ? 'block' : 'none'}} width='50px' height='50px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path> </g></svg>
                <svg className='volume-switch' onClick={volumeSwitch} style={{display: isPlaying == false ? 'block' : 'none'}} width='50px' height='50px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#ffffff'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M16 9.50009L21 14.5001M21 9.50009L16 14.5001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path></g></svg>
            </div>
        </div>
    )
}

export default App