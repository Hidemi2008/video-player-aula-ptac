import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './css/App.css';

const VideoPlayer = () => {
  const videos = [
    { title: 'Vídeo 1', url: 'https://youtu.be/Rr8ljRgcJNM?si=EP-CdI5Ba0hK6sx-' },
    { title: 'Vídeo 2', url: 'https://youtu.be/W3q8Od5qJio?si=w8vRJdLvzh9SL3kA' },
    { title: 'Vídeo 3', url: 'https://youtu.be/NeQM1c-XCDc?si=CJnESkAJai6skZQB' }
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0].url);

  return (
    <div className="div-video">
      <div className="video">
        <ReactPlayer url={currentVideo} className="react-player" />
      </div>

      <div className="video-list">
        {videos.map((video, index) => (
          <button
            key={index}
            className="video-button"
            onClick={() => setCurrentVideo(video.url)}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
