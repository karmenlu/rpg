import React from 'react'
import Player from "./Player";
import AI from "./AI";
export default function Arena({color, arenaWidth, arenaHeight, protags, antags}) {
    
    return (
        <div
             style={{
                 marginLeft: 'auto',
                 marginRight: 'auto',
                 position: 'relative',
                 backgroundColor: `${color}`,
                 width: `${arenaWidth}px`,
                 height: `${arenaHeight}px`
             }}
        >
            {protags.map((proSkin) => { return <Player skin={proSkin} arenaWidth={arenaWidth} arenaHeight={arenaHeight}/>})}
            {antags.map((anSkin) => { return <AI skin={anSkin} arenaWidth={arenaWidth} arenaHeight={arenaHeight}/>})}
        </div>
    )
}