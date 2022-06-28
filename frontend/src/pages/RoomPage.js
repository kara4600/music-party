import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
  const defaultVotes = 2;
  let params = useParams();
  let code = params.code;

  const [state, setState] = useState({
    votesToSkip: defaultVotes,
    guestCanPause: true,
    isHost: true,
    roomCode: code,
  });

  const getRoomInfo = async () => {
    await fetch(`/api/get-room?code=${state.roomCode}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState({
          ...state,
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
  };

  useEffect(() => {
    getRoomInfo();
  }, [state.guestCanPause, state.votesToSkip]);

  return (
    <div>
      <h1>Room code: {state.roomCode}</h1>
      <p>Votes: {state.votesToSkip}</p>
      <p>Guest can Pause: {state.guestCanPause.toString()}</p>
      <p>Host: {state.isHost.toString()}</p>
    </div>
  );
};

export default RoomPage;
