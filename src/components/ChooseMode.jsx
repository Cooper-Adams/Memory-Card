import React from 'react'

const ChooseMode = (props) => {
    const gameMode = (e) => {
        props.changeMode(e.target.title)
    }

    return (
        <div className='mode-container'>
            <div className='mode-box'>
                <div className='modal-box'>
                    <img onClick={gameMode} title='full' className='modal-img' src='src/assets/Full.jpg' alt='All Dragon Ball Sagas'/>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='z' src='src/assets/Z.jpg' alt='Sagas from Dragon Ball Z'/>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='super' src='src/assets/Super.jpg' alt='Sagas from Dragon Ball Super'/>
                </div>

                <div className='modal-box'>
                    <img onClick={gameMode} className='modal-img' title='movies' src='src/assets/Movies.png' alt='Sagas from Dragon Ball Z Movies'/>
                </div>
            </div>
        </div>
    )
}

export default ChooseMode