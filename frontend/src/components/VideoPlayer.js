import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const dimensions = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId="Foe8Jet8TVA" opts={dimensions} />
    </div>
  );
};

export default VideoPlayer;
