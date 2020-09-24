import React from 'react'
import PlayerComponent from './player';
let topValue = 0;
let topPlayers = [];
const players = [
  { id: '1', fpts: 11.45 },
  { id: '2', fpts: 12.22 },
  { id: '3', fpts: 9.17 },
  { id: '4', fpts: 3.17 },
  { id: '5', fpts: 3.17 },
  { id: '6', fpts: 11.6 },
  { id: '7', fpts: 0.22 },
  { id: '8', fpts: 1.17 },
  { id: '9', fpts: 3.57 },
  { id: '10', fpts: 2.63 },
]
function GetPlayerIds() {
  const ids =  players.map((x) => {
    if (x.fpts > topValue) {
      topValue = x.fpts;
    }
    topPlayers.push(x.fpts > 10? x : null);
    return x.id;
  });
  topPlayers = topPlayers.filter(x => x);
  return ids;
}
class SomeComponent extends React.Component {
  render() {
    const playersIds = GetPlayerIds();
    return (
      <div>
        <div>
          Top projection {topValue}
        </div>
        <div>
          <h2>Top players</h2>
          <div>
            {topPlayers.map(m => {
              if (m !== null){
                return (
                  <PlayerComponent player={m} />
                )
              }
              return null;
            })}
          </div>
        </div>
        <h3>Do something with the player ids</h3>
        <div>
          {playersIds.map}
        </div>
      </div>
    )
  }
}