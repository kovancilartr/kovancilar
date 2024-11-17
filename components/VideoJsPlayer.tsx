import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // CSS dosyasını import etmeyi unutmayın!

interface VideoPlayerProps {
  url: string;
}

const VideoJsPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (!videoRef.current) return;

    const player = videojs(videoRef.current, {
      sources: [{ src: url, type: "video/url" }],
      autoplay: false, // Otomatik oynatmayı devre dışı bırakın
      controls: true, // Kontrolleri gösterin
    });

    return () => {
      player.dispose(); // Video oynatıcısını temizleyin
    };
  }, [url]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoJsPlayer;
