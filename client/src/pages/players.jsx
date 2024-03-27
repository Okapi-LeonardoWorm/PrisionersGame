import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Players");
        setPlayers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllPlayers();
  }, []);
  return (
    <div>
      <h1>Players</h1>
      <div className="players">
        {players.map((player) => (
          <div className="player" key={player.id}>
            <h2>{player.id}</h2>
            <p>{player.name}</p>
            <p>{player.first_move}</p>
          </div>
        ))}
      </div>
      <button>
        <Link to="/addPlayer">Add player</Link>
      </button>
    </div>
  );
};

export default Players;
