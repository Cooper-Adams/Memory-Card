import React from 'react'

const ChooseMode = (props) => {
    const gameMode = (e) => { props.setMode(e.target.title) } 

    return (
        <div className='mode-container'>
            <div className='mode-box'>
                <div className='modal-box'>
                    <img onClick={gameMode} title='full' className='modal-img' src='/Full.jpg' alt='All Dragon Ball Sagas'/>
                    <h1 className='saga-title'>All Sagas</h1>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='z' src='/Z.jpg' alt='Sagas from Dragon Ball Z'/>
                    <h1 className='saga-title'>Dragon Ball Z Sagas</h1>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='super' src='/Super.jpg' alt='Sagas from Dragon Ball Super'/>
                    <h1 className='saga-title'>Dragon Ball Super Sagas</h1>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='gt' src='/dragonballgt.webp' alt='Sagas from Dragon Ball GT'/>
                    <h1 className='saga-title'>Dragon Ball GT Sagas</h1>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='movies' src='/Movies.png' alt='Sagas from Dragon Ball Z Movies'/>
                    <h1 className='saga-title'>Dragon Ball Movie Sagas</h1>
                </div>
            </div>
        </div>
    )
}

export default ChooseMode