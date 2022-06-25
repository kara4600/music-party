import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CreateRoomPage = () => {
  const defaultVotes = 2;
  const navigate = useNavigate();

  const [state, setState] = useState({
    guestCanPause: true,
    votesToSkip: defaultVotes,
  });

  useEffect(() => {});

  const handleVotesChange = (e) => {
    setState({
      ...state,
      votesToSkip: e.target.value,
    });
  };

  const handleGuestCanPauseChange = (e) => {
    setState({
      ...state,
      guestCanPause: e.target.value,
    });
  };

  const handleCreateButtonClick = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        votes_to_skip: state.votesToSkip,
        guest_can_pause: state.guestCanPause,
      }),
    };

    await fetch('/api/create-room', requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate(`/room/${data.code}/`);
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create a room
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">Guest Control Playback State</div>
          </FormHelperText>

          <RadioGroup
            row
            defaultValue="true"
            onClick={handleGuestCanPauseChange}
          >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />

            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required
            type="number"
            defaultValue={defaultVotes}
            inputProps={{
              min: 1,
              style: { textAlign: 'center' },
            }}
            onChange={handleVotesChange}
          />

          <FormHelperText>
            <div align="center">Votes required to skip song</div>
          </FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleCreateButtonClick}
        >
          Create A Room
        </Button>
      </Grid>

      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateRoomPage;
