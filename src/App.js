import ReactPlayer from 'react-player';

import "./css/App.css"

const VideoPlayer = () => {
  return (
   <div>
              <div >
                  </div>
                      <div>
                        <ReactPlayer  className='react-player' url='https://www.youtube.com/watch?v=oUFJJNQGwhk'/>
                  </div>
    </div>
  );
};

export default VideoPlayer;