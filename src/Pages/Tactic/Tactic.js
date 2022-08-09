import React, { useEffect, useState } from "react";
import PlayerDrag from "../../Components/PlayerDrag";
import "./Tactic.css"

const Tactic = () => {
    const [value, setValue] = useState("")
    const [players, setPlayers] = useState([])
    const setPlayersClick = () => {
        setPlayers([...players, value])
        setValue("")
    }
    return (
        <div className="display">
            <div className="add" onClick={setPlayersClick}>add</div>
            <input value={value}
             onChange={(e) => setValue(e.target.value)} />
            <div className="field">
                {players.map(number => <PlayerDrag playerNumber={number}/>)}
                {/* <PlayerDrag playerNumber={2}/>
                <PlayerDrag playerNumber={3}/>
                <PlayerDrag playerNumber={4}/> */}
            </div>
        </div>
    )
}

export default Tactic