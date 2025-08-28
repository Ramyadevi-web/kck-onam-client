import React from "react";

interface VideoThumbnailProps {
  thumbnail: string;
  videoSrc: string;
  openVideo: (src: string) => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ thumbnail, videoSrc, openVideo }) => {
  return (
    <div
      className="relative cursor-pointer inline-block"
      onClick={() => openVideo(videoSrc)}
    >
      {/* Thumbnail image */}
      <img
        src={thumbnail}
        alt="video thumbnail"
        className="w-40 rounded-lg shadow-lg"
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="play-button">▶</button>
      </div>
    </div>
  );
};

export default VideoThumbnail;
