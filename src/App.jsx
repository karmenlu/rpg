import React from 'react'
import Player from './components/Player'
import Arena from './components/Arena'
import './index.css'

export default function App() {
    const arenaColor = "green"
    const arenaWidth = 320
    const arenaHeight = 568
    const protags = ["f1.png"]
    const antags = ["e1.png"]
    
    return (
        <Arena color={arenaColor} arenaWidth={arenaWidth} arenaHeight={arenaHeight} protags={protags} antags={antags}/>
    )
}