import React, { useState, useRef } from 'react';
import Player from 'Player.jsx'; 

function ScoreBoard() {
  const [players, setPlayers] = useState([]);
  const playerNameInput = useRef(null);

  const addPlayer = () => {
    const playerName = playerNameInput.current.value;
    if (playerName.trim() !== '') {
      const newPlayer = {
        id: Date.now(),
        name: playerName
      };
      setPlayers([...players, newPlayer]);
      playerNameInput.current.value = '';
    }
  };

  return (
    <div>
      <h1>ScoreBoard</h1>
      <div>
        <input type="text" ref={playerNameInput} />
        <button onClick={addPlayer}>Add Player</button>
      </div>
      <div>
        {players.map(player => (
          <Player key={player.id} name={player.name} />
        ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
