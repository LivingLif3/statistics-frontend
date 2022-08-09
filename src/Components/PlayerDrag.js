import React, { useState } from "react"
import {useDrag} from "react-use-gesture"

const PlayerDrag = ({playerNumber}) => {
    const [pos, setPos] = useState({x: 0, y: 0})
    const bindPos = useDrag((params) => {
        setPos({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
    return (
        <div {...bindPos()} 
        style={{position: 'absolute', top: pos.y, left: pos.x}}
        className="mainDrag">
            {playerNumber}
        </div>
    )
}

export default PlayerDrag