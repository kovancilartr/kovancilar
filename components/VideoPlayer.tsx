import React from "react";
import ReactPlayer from "react-player/lazy";

interface VideoPlayerProps {
  videoOptions: {
    url: string;
    controls?: boolean;
    width?: number | string;
    height?: number | string;
    className?: string;
    poster?: string;
  };
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoOptions }) => {
  const {
    url,
    controls = false,
    width = "100%",
    height = "100%",
    className,
    poster,
  } = videoOptions;

  return (
    <div className={`video-player`}>
      <ReactPlayer
        url={url}
        controls={controls}
        width={width}
        height={height}
        className={className}
        poster={poster}
      />
    </div>
  );
};

export default VideoPlayer;
