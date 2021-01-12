import React, {useEffect} from 'react'
import Actor from './Actor'
import useWalk from '../hooks/use-walk'

export default function AI({skin, arenaWidth, arenaHeight}) {
    const { dir, step, walk, position } = useWalk(3, arenaWidth, arenaHeight)
    const data = {
        h: 32, w: 32
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            let randomDir = Math.floor(Math.random() * 4) + 0
            let directions = ['left', 'up', 'down', 'right'];
            walk(directions[randomDir])
        }, 500);

        return () => clearInterval(interval);
    }, [walk]);
    
    return (
        <Actor
            sprite={`url(${process.env.PUBLIC_URL + '/' + skin})`}
            data={data}
            step={step}
            dir={dir}
            position={position}
        />
    )
}