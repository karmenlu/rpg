import React from 'react'
import Actor from './Actor'
import useKeyPress from '../hooks/use-key-press'
import useWalk from '../hooks/use-walk'

export default function Player({skin}) {
    const { dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32, w: 32
    }
    
    useKeyPress((e) => {
        const keyPress = e.key
        if(keyPress.startsWith("Arrow")) {
            walk(keyPress.replace("Arrow", "").toLowerCase())
            e.preventDefault()
        }
    })
    
    return (
        <Actor
            sprite={`url(${process.env.PUBLIC_URL + '/' + skin + '.png'})`}
            data={data}
            step={step}
            dir={dir}
            position={position}
        />
    )
}