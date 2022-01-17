import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import ButtonComp from '../../componants/ButtonComp'

const mapStateToProps = (state) => {
    return state
}

function Dashboard (props) {
    let [joke, setJoke] = useState('')
    const getJokes = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => res.json())
        .then((res) => {
            setJoke(res.value)
        })
    }
    return (
        <div className='m-3'>
            <h1>Dashboard</h1>
            <p>There's nothing here yet, but in the meentime, would you like to hear a joke?</p>
            <ButtonComp 
                btnText='YES please'
                handleClick={getJokes}
            /> 
            <p className='mt-3'>{joke}</p>
        </div>
    )
}

export default connect(mapStateToProps,null)(Dashboard)