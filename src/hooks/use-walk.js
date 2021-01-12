import { useState } from 'react'

export default function useWalk(maxSteps, arenaWidth, arenaHeight) {
    const [position, setPosition] = useState({x:0, y:0})
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    const directions = {
        down: 0, left: 1, right: 2, up: 3
    }
    const stepSize = 16;
    const modifier = {
        down: { x: 0, y: stepSize }, 
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize }
    }
    
    function stayOnGrid(coordinate, gridMax) {
        if(coordinate <= 0) {
            return 0;
        } else if (coordinate >= gridMax) {
            return gridMax;
        } else {
            return coordinate;
        }
    }
    
    function walk(dir) {
        setDir(prev => {
            if(directions[dir] === prev) move(dir);
            return directions[dir]
        })
        setStep(prev => prev < maxSteps - 1 ? prev + 1: 0)
    } 
    
    function move(dir) {
        setPosition(prev => ({
            x: stayOnGrid(prev.x + modifier[dir].x, arenaWidth - 32),
            y: stayOnGrid(prev.y + modifier[dir].y, arenaHeight - 32)
        }))
    }
    
    return {
        walk, dir, step, position
    }
}